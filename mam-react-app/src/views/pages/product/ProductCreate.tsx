import { Link } from "react-router";
import { useState, useEffect } from "react";
import PageHeading from "../../../components/PageHeading.tsx";

import { api } from "../../../config.ts";
import { defaultProduct, type Product } from "../../../interfaces/Product.ts";
import type { Brand } from "../../../interfaces/brand.ts";
import type { Category } from "../../../interfaces/Category.ts";

function ProductCreate() {
  const [product, setProduct] = useState<Product>(defaultProduct);
 
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);


  // let name = "Mina";
  // name = "Raju";
  // name = "Mithu";
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  function getBrands(){
    api.get("brands")
    .then((res) => {
      // console.log(res.data);
      setBrands(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  function getCategories(){
    api.get("categories")
    .then((res) => {
      // console.log(res.data);
      setCategories(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
     getBrands();
    getCategories();
  }, []);

  function handleSubmit() {
    // console.log(product);
    let data = new FormData();
      data.append("name", product.name);
      data.append("category_id", product.category_id.toString());
      data.append("brand_id", product.brand_id.toString());
      data.append("desc", product.short_description.toString());
      data.append("price", product.price.toString());
      data.append("qty", product.quantity.toString());
      data.append("restock", product.point_of_restock.toString());
      data.append("active", product.active.toString());
      if(product.image){
      data.append("image", product.image);
      }
 
    api.post("product-create", data, {
      headers: {"Content-Type": "multipart/form-data",
},
    })
    .then((res) => {
      console.log (res.data);

    })
    .catch((err) => {
      console.log(err);
    });
  
}

                                                                                              
  return (
    <>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading
            icon="person-plus"
            subtitle="Management"
            title="Add Product"
          >
            <Link className="btn btn-outline-secondary btn-sm" to="/user">
              <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to
              List
            </Link>
          </PageHeading>

          <section className="row g-3">
            <div className="col-12">
  
              <form className="panel needs-validation">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="firstName">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="firstName"
                      type="text"
                      value={product.name}
                      onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="role">
                      Category
                    </label>
                    <select
                      className="form-select"
                      id="role"
                      value={product.category_id}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          category_id: Number(e.target.value),
                        })
                      }
                    >
                      <option value={0} disabled>
                        Choose Category...
                      </option>
                      {categories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="role">
                      Brand
                    </label>
                    <select
                      className="form-select"
                      id="role"
                      value={product.brand_id}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          brand_id: Number(e.target.value),
                        })
                      }
                    >
                      <option value={0} disabled>
                        Choose Brands...
                      </option>
                      {brands.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Price
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Quantity
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          quantity: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Restock Qty
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="number"
                      value={product.point_of_restock}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          point_of_restock: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Desc
                    </label>
                    <textarea
                      className="form-control"
                      value={product.short_description}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          short_description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Image
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="file"
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          image: e.target.files?.[0] ?? null,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="active"
                        checked={product.active}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            active: e.target.checked,
                          })
                        }
                      />
                      <label className="form-check-label" htmlFor="active">
                        Is active
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between gap-2 mt-4">
                  <button className="btn btn-outline-danger " type="reset" onClick={()=>setProduct(defaultProduct)}>
                    Reset
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default ProductCreate;
