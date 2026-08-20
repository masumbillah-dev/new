import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading.tsx";
import { useEffect, useState } from "react";
import { api, basePath } from "../../../config.ts";
import type { Product } from "../../../interfaces/Product.ts";



function ProductManage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [deleteId, setDeleteId] =useState(0);

  const getProducts = () => {
    api.get("products")
    .then(res =>{
      // console.log(res.data);
      setProducts(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  function handleDelete(id: number) {
    api.delete("product-delete?id=" + id)
      .then(res => {
        if(res.status==200){
          getProducts();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading icon="people" subtitle="Management" title="Products">
            <Link to="/product-create" className="btn btn-primary">
              <i className="bi bi-plus-lg me-1"></i> Add New
            </Link>
          </PageHeading>

          <section className="row g-3 mt-1" aria-label="Product summary">
            <div className="col-12">
              <article className="metric-card metric-primary">
                <div className="metric-top">
                  <span className="metric-label">Total Products</span>
                  <span className="metric-icon"><i className="bi bi-people" aria-hidden="true"></i></span>
                </div>
                <div className="metric-value">{products.length}</div>
                
              </article>
            </div>

          
          </section>

          <section className="panel mt-3">
            <div className="table-responsive">
              <table className="table align-middle mb-0" id="usersTable" data-searchable-table="">
                <thead><tr><th scope="col">SL No.</th><th scope="col">ID</th><th scope="col">Name</th>
                
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col" className="text-end">Action</th></tr></thead>
                <tbody>
                  {products.map((item,index)=>(
                    <tr key={item.id}>
                      <td>
                        {(item.image_path != null && item.image_path != "") && (
                          <img src={basePath + item.image_path} width={50} />
                        )}
                      </td>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.brand}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    
                  
                    <td>
                      <div className="d-flex gap-1 justify-content-end">
                        <Link to={`/product-details/${item.id}`} className="btn btn-sm btn-outline-success"><i className="bi bi-eye"></i></Link>
                        <Link to={`/product-edit/${item.id}`} className="btn btn-sm btn-outline-primary"><i className="bi bi-pencil-square"></i></Link>
                       
                      
                        <button type="button" 
                        className="btn btn-sm btn-outline-danger"
                        onClick={()=>{setDeleteId(Number(item.id))}} 
                        data-bs-toggle="modal" 
                        data-bs-target="#deleteModal">
                          <i className="bi bi-trash"></i>
                        </button>


                        <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete Product </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <span className="badge border border-danger text-danger  fs-5">Product ID: {deleteId}</span>
                              <div className="modal-body">
                                <h3 className="text-center">Are you sure ?</h3>
                               <p className="text-center">Do you want to delete this product ?</p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-danger"  data-bs-dismiss="modal" onClick={()=> handleDelete(deleteId)}>Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mt-3">
              <p className="text-muted small mb-0">Showing 1 to 6 of {products.length} products</p>
              <nav aria-label="products pagination"><ul className="pagination pagination-sm mb-0"><li className="page-item disabled"><a className="page-link" href="#">Previous</a></li><li className="page-item active"><a className="page-link" href="#">1</a></li><li className="page-item"><a className="page-link" href="#">2</a></li><li className="page-item"><a className="page-link" href="#">Next</a></li></ul></nav>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default ProductManage;
