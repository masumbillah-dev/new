import { useState } from "react";

type Deal = {
    id: number;
    name: string;
    company: string;
    contact: string;
    amount: number;
    stage: string;
    closeDate: string;
};

function Deals() {

    const [search, setSearch] = useState("");

    const [deals] = useState<Deal[]>([
        {
            id: 1,
            name: "Website Development",
            company: "Rahim Technologies",
            contact: "Rahim Ahmed",
            amount: 80000,
            stage: "Negotiation",
            closeDate: "2026-08-30",
        },
        {
            id: 2,
            name: "CRM Development",
            company: "ABC Limited",
            contact: "John Smith",
            amount: 150000,
            stage: "Proposal",
            closeDate: "2026-09-10",
        },
        {
            id: 3,
            name: "Digital Marketing",
            company: "XYZ Corporation",
            contact: "Sarah Khan",
            amount: 60000,
            stage: "Won",
            closeDate: "2026-08-20",
        },
        {
            id: 4,
            name: "Software Maintenance",
            company: "ABC Limited",
            contact: "John Smith",
            amount: 45000,
            stage: "New",
            closeDate: "2026-09-20",
        },
    ]);


    const filteredDeals = deals.filter(
        (deal) => {

            const text =
                `${deal.name} ${deal.company} ${deal.contact} ${deal.stage}`
                    .toLowerCase();

            return text.includes(
                search.toLowerCase()
            );
        }
    );


    const getStageClass = (
        stage: string
    ) => {

        switch (stage) {

            case "New":
                return "badge-secondary";

            case "Proposal":
                return "badge-info";

            case "Negotiation":
                return "badge-warning";

            case "Won":
                return "badge-success";

            case "Lost":
                return "badge-danger";

            default:
                return "badge-secondary";
        }
    };


    return (

        <div className="content-wrapper">

            {/* Page Header */}

            <div className="page-header">

                <h3 className="page-title">
                    Deals
                </h3>

            </div>


            {/* Deals Card */}

            <div className="card">

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h4 className="card-title mb-0">
                            Sales Pipeline
                        </h4>


                        <button className="btn btn-primary">

                            <i className="mdi mdi-plus"></i>

                            &nbsp; Add Deal

                        </button>

                    </div>


                    {/* Search */}

                    <div className="row mb-4">

                        <div className="col-md-5">

                            <div className="form-group mb-0">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search deals..."
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


                    {/* Pipeline Summary */}

                    <div className="row mb-4">

                        <div className="col-md-3">

                            <div className="card bg-primary text-white">

                                <div className="card-body">

                                    <h4>
                                        {
                                            deals.filter(
                                                (deal) =>
                                                    deal.stage ===
                                                    "New"
                                            ).length
                                        }
                                    </h4>

                                    <p className="mb-0">
                                        New
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card bg-info text-white">

                                <div className="card-body">

                                    <h4>
                                        {
                                            deals.filter(
                                                (deal) =>
                                                    deal.stage ===
                                                    "Proposal"
                                            ).length
                                        }
                                    </h4>

                                    <p className="mb-0">
                                        Proposal
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card bg-warning text-white">

                                <div className="card-body">

                                    <h4>
                                        {
                                            deals.filter(
                                                (deal) =>
                                                    deal.stage ===
                                                    "Negotiation"
                                            ).length
                                        }
                                    </h4>

                                    <p className="mb-0">
                                        Negotiation
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="card bg-success text-white">

                                <div className="card-body">

                                    <h4>
                                        {
                                            deals.filter(
                                                (deal) =>
                                                    deal.stage ===
                                                    "Won"
                                            ).length
                                        }
                                    </h4>

                                    <p className="mb-0">
                                        Won
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Deals Table */}

                    <div className="table-responsive">

                        <table className="table table-hover">

                            <thead>

                                <tr>

                                    <th>Deal ID</th>
                                    <th>Deal Name</th>
                                    <th>Company</th>
                                    <th>Contact</th>
                                    <th>Amount</th>
                                    <th>Stage</th>
                                    <th>Close Date</th>
                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredDeals.length > 0 ? (

                                    filteredDeals.map(
                                        (deal) => (

                                            <tr
                                                key={deal.id}
                                            >

                                                <td>
                                                    DL-
                                                    {String(
                                                        deal.id
                                                    ).padStart(
                                                        3,
                                                        "0"
                                                    )}
                                                </td>


                                                <td>
                                                    {deal.name}
                                                </td>


                                                <td>
                                                    {deal.company}
                                                </td>


                                                <td>
                                                    {deal.contact}
                                                </td>


                                                <td>
                                                    ৳
                                                    {deal.amount.toLocaleString()}
                                                </td>


                                                <td>

                                                    <label
                                                        className={`badge ${getStageClass(
                                                            deal.stage
                                                        )}`}
                                                    >
                                                        {deal.stage}
                                                    </label>

                                                </td>


                                                <td>
                                                    {deal.closeDate}
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
                                            No deals found
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

export default Deals;