import { useEffect, useState } from "react";

type Lead = {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    source: string;
    status: "New" | "Contacted" | "Qualified" | "Won" | "Lost";
};

function Leads() {

    const [leads, setLeads] = useState<Lead[]>([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const [addLeadOpen, setAddLeadOpen] = useState(false);
    const [editLead, setEditLead] = useState<Lead | null>(null);
    const [viewLead, setViewLead] = useState<Lead | null>(null);

    const [newLead, setNewLead] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const API_URL =
        "http://localhost/my-react-project/api/lead-api.php";


    // =========================
    // Load Leads
    // =========================
    const loadLeads = async () => {

        try {

            const response = await fetch(API_URL);
            const result = await response.json();

            if (result.success) {
                setLeads(result.data);
            }

        } catch (error) {

            console.error("Failed to load leads:", error);

        }
    };


    useEffect(() => {
        loadLeads();
    }, []);


    // =========================
    // Delete Lead
    // =========================
    const deleteLead = async (id: number) => {

        if (
            !window.confirm(
                "Are you sure you want to delete this lead?"
            )
        ) {
            return;
        }

        try {

            const response = await fetch(API_URL, {
                method: "DELETE",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    id: id,
                }),
            });

            const result = await response.json();

            if (result.success) {

                loadLeads();

            } else {

                alert(result.message);

            }

        } catch (error) {

            console.error("Delete failed:", error);

        }
    };


    // =========================
    // Update Status
    // =========================
    const updateStatus = async (
        id: number,
        status: Lead["status"]
    ) => {

        try {

            const response = await fetch(API_URL, {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    id: id,
                    status: status,
                }),
            });

            const result = await response.json();

            if (result.success) {

                loadLeads();

            } else {

                alert(result.message);

            }

        } catch (error) {

            console.error(
                "Status update failed:",
                error
            );

        }
    };


    // =========================
    // Add New Lead
    // =========================
    const addLead = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            const response = await fetch(API_URL, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    ...newLead,
                    source: "Manual",
                    status: "New",
                }),
            });

            const result = await response.json();

            if (result.success) {

                setAddLeadOpen(false);

                setNewLead({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    subject: "",
                    message: "",
                });

                loadLeads();

            } else {

                alert(result.message);

            }

        } catch (error) {

            console.error(
                "Add lead failed:",
                error
            );

        }
    };


    // =========================
    // Search + Status Filter
    // =========================
    const filteredLeads = leads.filter(
        (lead) => {

            const searchText =
                `${lead.name} ${lead.email} ${lead.phone} ${lead.company}`
                    .toLowerCase();

            const matchesSearch =
                searchText.includes(
                    search.toLowerCase()
                );

            const matchesStatus =
                statusFilter === "" ||
                lead.status === statusFilter;

            return (
                matchesSearch &&
                matchesStatus
            );
        }
    );


    // =========================
    // Status Badge
    // =========================
    const getStatusClass = (
        status: string
    ) => {

        switch (status) {

            case "New":
                return "badge-success";

            case "Contacted":
                return "badge-warning";

            case "Qualified":
                return "badge-info";

            case "Won":
                return "badge-primary";

            case "Lost":
                return "badge-danger";

            default:
                return "badge-secondary";
        }
    };


    return (

        <div className="content-wrapper">

            {/* =========================
                Page Header
            ========================== */}

            <div className="page-header">

                <h3 className="page-title">
                    Leads
                </h3>

            </div>


            {/* =========================
                Leads Card
            ========================== */}

            <div className="card">

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h4 className="card-title mb-0">
                            All Leads
                        </h4>


                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                setAddLeadOpen(true)
                            }
                        >
                            <i className="mdi mdi-plus"></i>
                            &nbsp; Add Lead
                        </button>

                    </div>


                    {/* =========================
                        Search & Filter
                    ========================== */}

                    <div className="row mb-4">

                        <div className="col-md-5">

                            <div className="form-group mb-0">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search leads..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="form-group mb-0">

                                <select
                                    className="form-control"
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(
                                            e.target.value
                                        )
                                    }
                                >

                                    <option value="">
                                        All Status
                                    </option>

                                    <option value="New">
                                        New
                                    </option>

                                    <option value="Contacted">
                                        Contacted
                                    </option>

                                    <option value="Qualified">
                                        Qualified
                                    </option>

                                    <option value="Won">
                                        Won
                                    </option>

                                    <option value="Lost">
                                        Lost
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        Table
                    ========================== */}

                    <div className="table-responsive">

                        <table className="table table-hover">

                            <thead>

                                <tr>

                                    <th>Lead ID</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredLeads.length > 0 ? (

                                    filteredLeads.map(
                                        (lead) => (

                                            <tr
                                                key={lead.id}
                                            >

                                                <td>
                                                    LD-
                                                    {String(
                                                        lead.id
                                                    ).padStart(
                                                        3,
                                                        "0"
                                                    )}
                                                </td>


                                                <td>
                                                    {lead.name}
                                                </td>


                                                <td>
                                                    {lead.company ||
                                                        "-"}
                                                </td>


                                                <td>
                                                    {lead.phone ||
                                                        "-"}
                                                </td>


                                                <td>
                                                    {lead.email}
                                                </td>


                                                <td>

                                                    <select
                                                        className={`badge ${getStatusClass(
                                                            lead.status
                                                        )}`}
                                                        value={
                                                            lead.status
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            updateStatus(
                                                                lead.id,
                                                                e
                                                                    .target
                                                                    .value as Lead["status"]
                                                            )
                                                        }
                                                    >

                                                        <option value="New">
                                                            New
                                                        </option>

                                                        <option value="Contacted">
                                                            Contacted
                                                        </option>

                                                        <option value="Qualified">
                                                            Qualified
                                                        </option>

                                                        <option value="Won">
                                                            Won
                                                        </option>

                                                        <option value="Lost">
                                                            Lost
                                                        </option>

                                                    </select>

                                                </td>


                                                <td>

                                                    {/* View */}

                                                    <button
                                                        className="btn btn-sm btn-info mr-2"
                                                        title="View"
                                                        onClick={() =>
                                                            setViewLead(
                                                                lead
                                                            )
                                                        }
                                                    >
                                                        <i className="mdi mdi-eye"></i>
                                                    </button>


                                                    {/* Edit */}

                                                    <button
                                                        className="btn btn-sm btn-warning mr-2"
                                                        title="Edit"
                                                        onClick={() => setEditLead(lead)}
                                                    >
                                                        <i className="mdi mdi-pencil"></i>
                                                    </button>


                                                    {/* Delete */}

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        title="Delete"
                                                        onClick={() =>
                                                            deleteLead(
                                                                lead.id
                                                            )
                                                        }
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
                                            colSpan={7}
                                            className="text-center"
                                        >
                                            No leads found
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


            {/* =====================================================
                ADD LEAD MODAL
            ====================================================== */}

            {addLeadOpen && (

                <div
                    className="modal fade show d-block"
                    tabIndex={-1}
                    style={{
                        backgroundColor:
                            "rgba(0,0,0,0.5)",
                    }}
                >

                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">


                            {/* Header */}

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Add New Lead
                                </h5>


                                <button
                                    type="button"
                                    className="close"
                                    onClick={() =>
                                        setAddLeadOpen(
                                            false
                                        )
                                    }
                                >
                                    <span>&times;</span>
                                </button>

                            </div>


                            {/* Form */}

                            <form
                                onSubmit={addLead}
                            >

                                <div className="modal-body">

                                    <div className="row">


                                        {/* Name */}

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    Full Name *
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={
                                                        newLead.name
                                                    }
                                                    onChange={(e) =>
                                                        setNewLead({
                                                            ...newLead,
                                                            name: e
                                                                .target
                                                                .value,
                                                        })
                                                    }
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* Email */}

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    Email *
                                                </label>

                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    value={
                                                        newLead.email
                                                    }
                                                    onChange={(e) =>
                                                        setNewLead({
                                                            ...newLead,
                                                            email: e
                                                                .target
                                                                .value,
                                                        })
                                                    }
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* Phone */}

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    Phone
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={
                                                        newLead.phone
                                                    }
                                                    onChange={(e) =>
                                                        setNewLead({
                                                            ...newLead,
                                                            phone: e
                                                                .target
                                                                .value,
                                                        })
                                                    }
                                                />

                                            </div>

                                        </div>


                                        {/* Company */}

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    Company
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={
                                                        newLead.company
                                                    }
                                                    onChange={(e) =>
                                                        setNewLead({
                                                            ...newLead,
                                                            company: e
                                                                .target
                                                                .value,
                                                        })
                                                    }
                                                />

                                            </div>

                                        </div>


                                        {/* Subject */}

                                        <div className="col-md-12">

                                            <div className="form-group">

                                                <label>
                                                    Subject
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={
                                                        newLead.subject
                                                    }
                                                    onChange={(e) =>
                                                        setNewLead({
                                                            ...newLead,
                                                            subject: e
                                                                .target
                                                                .value,
                                                        })
                                                    }
                                                />

                                            </div>

                                        </div>


                                        {/* Message */}

                                        <div className="col-md-12">

                                            <div className="form-group">

                                                <label>
                                                    Message
                                                </label>

                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    value={
                                                        newLead.message
                                                    }
                                                    onChange={(e) =>
                                                        setNewLead({
                                                            ...newLead,
                                                            message: e
                                                                .target
                                                                .value,
                                                        })
                                                    }
                                                />

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* Footer */}

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() =>
                                            setAddLeadOpen(
                                                false
                                            )
                                        }
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Save Lead
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            )}


            {/* =====================================================
                VIEW LEAD MODAL
            ====================================================== */}

            {viewLead && (

                <div
                    className="modal fade show d-block"
                    tabIndex={-1}
                    style={{
                        backgroundColor:
                            "rgba(0,0,0,0.5)",
                    }}
                >

                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">


                            {/* Header */}

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Lead Details
                                </h5>


                                <button
                                    type="button"
                                    className="close"
                                    onClick={() =>
                                        setViewLead(null)
                                    }
                                >
                                    <span>&times;</span>
                                </button>

                            </div>


                            {/* Body */}

                            <div className="modal-body">

                                <div className="row">


                                    {/* Lead ID */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Lead ID:
                                            </strong>{" "}

                                            LD-
                                            {String(
                                                viewLead.id
                                            ).padStart(
                                                3,
                                                "0"
                                            )}
                                        </p>

                                    </div>


                                    {/* Name */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Name:
                                            </strong>{" "}

                                            {viewLead.name}
                                        </p>

                                    </div>


                                    {/* Email */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Email:
                                            </strong>{" "}

                                            {viewLead.email}
                                        </p>

                                    </div>


                                    {/* Phone */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Phone:
                                            </strong>{" "}

                                            {viewLead.phone ||
                                                "-"}
                                        </p>

                                    </div>


                                    {/* Company */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Company:
                                            </strong>{" "}

                                            {viewLead.company ||
                                                "-"}
                                        </p>

                                    </div>


                                    {/* Subject */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Subject:
                                            </strong>{" "}

                                            {viewLead.subject ||
                                                "-"}
                                        </p>

                                    </div>


                                    {/* Source */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Source:
                                            </strong>{" "}

                                            {viewLead.source ||
                                                "-"}
                                        </p>

                                    </div>


                                    {/* Status */}

                                    <div className="col-md-6">

                                        <p>
                                            <strong>
                                                Status:
                                            </strong>{" "}

                                            {viewLead.status}
                                        </p>

                                    </div>


                                    {/* Message */}

                                    <div className="col-md-12">

                                        <p>
                                            <strong>
                                                Message:
                                            </strong>
                                        </p>


                                        <div
                                            className="p-3 rounded"
                                            style={{
                                                color: "#000",
                                                backgroundColor: "#f8f9fa",
                                            }}
                                        >
                                            {viewLead.message || "-"}
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Footer */}

                            <div className="modal-footer">

                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() =>
                                        setViewLead(null)
                                    }
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* Edit Lead Modal */}
{editLead && (

    <div
        className="modal fade show d-block"
        tabIndex={-1}
        style={{
            backgroundColor: "rgba(0,0,0,0.5)",
        }}
    >

        <div className="modal-dialog modal-lg">

            <div className="modal-content">

                <div className="modal-header">

                    <h5 className="modal-title">
                        Edit Lead
                    </h5>

                    <button
                        type="button"
                        className="close"
                        onClick={() => setEditLead(null)}
                    >
                        <span>&times;</span>
                    </button>

                </div>


                <form
                    onSubmit={async (e) => {

                        e.preventDefault();

                        try {

                            const response = await fetch(
                                API_URL,
                                {
                                    method: "PUT",

                                    headers: {
                                        "Content-Type":
                                            "application/json",
                                    },

                                    body: JSON.stringify({
                                        id: editLead.id,
                                        name: editLead.name,
                                        email: editLead.email,
                                        phone: editLead.phone,
                                        company: editLead.company,
                                        subject: editLead.subject,
                                        message: editLead.message,
                                        source: editLead.source,
                                        status: editLead.status,
                                    }),
                                }
                            );

                            const result =
                                await response.json();

                            if (result.success) {

                                setEditLead(null);

                                loadLeads();

                            } else {

                                alert(result.message);

                            }

                        } catch (error) {

                            console.error(
                                "Update lead failed:",
                                error
                            );

                        }

                    }}
                >

                    <div className="modal-body">

                        <div className="row">

                            {/* Name */}

                            <div className="col-md-6">

                                <div className="form-group">

                                    <label>
                                        Full Name *
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editLead.name}
                                        onChange={(e) =>
                                            setEditLead({
                                                ...editLead,
                                                name: e.target.value,
                                            })
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            {/* Email */}

                            <div className="col-md-6">

                                <div className="form-group">

                                    <label>
                                        Email *
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={editLead.email}
                                        onChange={(e) =>
                                            setEditLead({
                                                ...editLead,
                                                email: e.target.value,
                                            })
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            {/* Phone */}

                            <div className="col-md-6">

                                <div className="form-group">

                                    <label>
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editLead.phone}
                                        onChange={(e) =>
                                            setEditLead({
                                                ...editLead,
                                                phone: e.target.value,
                                            })
                                        }
                                    />

                                </div>

                            </div>


                            {/* Company */}

                            <div className="col-md-6">

                                <div className="form-group">

                                    <label>
                                        Company
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editLead.company}
                                        onChange={(e) =>
                                            setEditLead({
                                                ...editLead,
                                                company: e.target.value,
                                            })
                                        }
                                    />

                                </div>

                            </div>


                            {/* Subject */}

                            <div className="col-md-12">

                                <div className="form-group">

                                    <label>
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editLead.subject}
                                        onChange={(e) =>
                                            setEditLead({
                                                ...editLead,
                                                subject: e.target.value,
                                            })
                                        }
                                    />

                                </div>

                            </div>


                            {/* Message */}

                            <div className="col-md-12">

                                <div className="form-group">

                                    <label>
                                        Message
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows={4}
                                        value={editLead.message}
                                        onChange={(e) =>
                                            setEditLead({
                                                ...editLead,
                                                message: e.target.value,
                                            })
                                        }
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="modal-footer">

                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() =>
                                setEditLead(null)
                            }
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Update Lead
                        </button>

                    </div>

                </form>

            </div>

        </div>

    </div>

)}

        </div>
    );
}

export default Leads;