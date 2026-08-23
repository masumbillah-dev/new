import { useState } from "react";
import { Link } from "react-router-dom";

type Company = {
    id: number;
    name: string;
    industry: string;
    website: string;
    email: string;
    phone: string;
    contactPerson: string;
    status: string;
};

function Companies() {

    const [search, setSearch] = useState("");

    const [companies] = useState<Company[]>([
        {
            id: 1,
            name: "Rahim Technologies",
            industry: "Technology",
            website: "www.rahimtech.com",
            email: "info@rahimtech.com",
            phone: "01712345678",
            contactPerson: "Rahim Ahmed",
            status: "Active",
        },
        {
            id: 2,
            name: "ABC Limited",
            industry: "Software",
            website: "www.abclimited.com",
            email: "info@abclimited.com",
            phone: "01700000000",
            contactPerson: "John Smith",
            status: "Active",
        },
        {
            id: 3,
            name: "XYZ Corporation",
            industry: "Marketing",
            website: "www.xyzcorp.com",
            email: "info@xyzcorp.com",
            phone: "01800000000",
            contactPerson: "Sarah Khan",
            status: "Inactive",
        },
    ]);


    const filteredCompanies = companies.filter(
        (company) => {

            const text =
                `${company.name} ${company.industry} ${company.email} ${company.phone} ${company.contactPerson}`
                    .toLowerCase();

            return text.includes(
                search.toLowerCase()
            );
        }
    );


    return (

        <div className="content-wrapper">

            {/* Page Header */}

            <div className="page-header d-flex justify-content-between align-items-center">

                <h3 className="page-title mb-0">
                    Companies
                </h3>

                <Link
                    to="/"
                    className="btn btn-light"
                >
                    <i className="mdi mdi-arrow-left"></i>
                    &nbsp; Back to Dashboard
                </Link>

            </div>


            {/* Companies Card */}

            <div className="card">

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h4 className="card-title mb-0">
                            All Companies
                        </h4>

                        <button className="btn btn-primary">

                            <i className="mdi mdi-plus"></i>

                            &nbsp; Add Company

                        </button>

                    </div>


                    {/* Search */}

                    <div className="row mb-4">

                        <div className="col-md-5">

                            <div className="form-group mb-0">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search companies..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>

                    </div>


                    {/* Table */}

                    <div className="table-responsive">

                        <table className="table table-hover">

                            <thead>

                                <tr>

                                    <th>ID</th>
                                    <th>Company</th>
                                    <th>Industry</th>
                                    <th>Contact Person</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredCompanies.length > 0 ? (

                                    filteredCompanies.map(
                                        (company) => (

                                            <tr
                                                key={company.id}
                                            >

                                                <td>
                                                    CO-
                                                    {String(
                                                        company.id
                                                    ).padStart(
                                                        3,
                                                        "0"
                                                    )}
                                                </td>


                                                <td>
                                                    {company.name}
                                                </td>


                                                <td>
                                                    {company.industry}
                                                </td>


                                                <td>
                                                    {company.contactPerson}
                                                </td>


                                                <td>
                                                    {company.phone}
                                                </td>


                                                <td>
                                                    {company.email}
                                                </td>


                                                <td>

                                                    <label
                                                        className={
                                                            company.status ===
                                                            "Active"
                                                                ? "badge badge-success"
                                                                : "badge badge-secondary"
                                                        }
                                                    >
                                                        {company.status}
                                                    </label>

                                                </td>


                                                <td>

                                                    <button
                                                        className="btn btn-sm btn-info mr-2"
                                                        title="View"
                                                    >
                                                        <i className="mdi mdi-eye"></i>
                                                    </button>


                                                    <button
                                                        className="btn btn-sm btn-warning mr-2"
                                                        title="Edit"
                                                    >
                                                        <i className="mdi mdi-pencil"></i>
                                                    </button>


                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        title="Delete"
                                                    >
                                                        <i className="mdi mdi-delete"></i>
                                                    </button>

                                                </td>

                                            </tr>

                                        )

                                    )

                                ) : (

                                    <tr>

                                        <td
                                            colSpan={8}
                                            className="text-center"
                                        >
                                            No companies found
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Companies;