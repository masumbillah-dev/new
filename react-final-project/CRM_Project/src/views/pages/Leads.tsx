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

type LeadForm = {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    source: string;
    status: Lead["status"];
};

function Leads() {

    const [leads, setLeads] = useState<Lead[]>([]);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const [showAddModal, setShowAddModal] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const [saving, setSaving] = useState(false);

    const [viewLead, setViewLead] = useState<Lead | null>(null);
    const [editLead, setEditLead] = useState<Lead | null>(null);
    const [editSaving, setEditSaving] = useState(false);

    const API_URL =
        "http://localhost/my-react-project/api/lead-api.php";
        //  "/api/lead-api.php";


    // =========================
    // Add Lead Form
    // =========================

    const [form, setForm] = useState<LeadForm>({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        source: "Manual",
        status: "New",
    });


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

            console.error(
                "Failed to load leads:",
                error
            );

        }

    };


    useEffect(() => {

        loadLeads();

    }, []);


    // =========================
    // Form Change
    // =========================

    const handleFormChange = (
        field: keyof LeadForm,
        value: string
    ) => {

        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));

    };


    // =========================
    // Reset Form
    // =========================

    const resetForm = () => {

        setForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
            source: "Manual",
            status: "New",
        });

    };


    // =========================
    // Close Add Modal
    // =========================

    const closeAddModal = () => {

        if (saving) {
            return;
        }

        setShowAddModal(false);

        resetForm();

    };


    // =========================
    // Add Lead
    // =========================

    const handleAddLead = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        if (!form.name.trim()) {

            alert("Please enter lead name.");

            return;

        }


        if (!form.email.trim()) {

            alert("Please enter email address.");

            return;

        }


        try {

            setSaving(true);


            const response = await fetch(
                API_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        phone: form.phone,
                        company: form.company,
                        subject: form.subject,
                        message: form.message,
                        source: form.source,
                        status: form.status,
                    }),
                }
            );


            const result = await response.json();


            if (result.success) {

                // Close modal
                setShowAddModal(false);

                // Reset form
                resetForm();

                // Reset search and filter
                setSearch("");
                setStatusFilter("");

                // Reload lead list
                await loadLeads();

                // Success message
                setSuccessMessage(
                    "Lead created successfully!"
                );

                // Remove success message
                setTimeout(() => {

                    setSuccessMessage("");

                }, 4000);

            } else {

                alert(
                    result.message ||
                    "Failed to create lead."
                );

            }

        } catch (error) {

            console.error(
                "Add lead failed:",
                error
            );

            alert(
                "Unable to create lead. Please check the API connection."
            );

        } finally {

            setSaving(false);

        }

    };


    // =========================
    // Delete Lead
    // =========================

    const deleteLead = async (
        id: number
    ) => {

        if (
            !window.confirm(
                "Are you sure you want to delete this lead?"
            )
        ) {
            return;
        }


        try {

            const response = await fetch(
                API_URL,
                {
                    method: "DELETE",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        id: id,
                    }),
                }
            );


            const result =
                await response.json();


            if (result.success) {

                await loadLeads();

                setSuccessMessage(
                    "Lead deleted successfully!"
                );

                setTimeout(() => {

                    setSuccessMessage("");

                }, 3000);

            } else {

                alert(result.message);

            }

        } catch (error) {

            console.error(
                "Delete failed:",
                error
            );

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

            const response = await fetch(
                API_URL,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        id: id,
                        status: status,
                    }),
                }
            );


            const result =
                await response.json();


            if (result.success) {

                await loadLeads();

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
    // View Lead
    // =========================

    const handleViewLead = (lead: Lead) => {
        setViewLead(lead);
    };


    // =========================
    // Edit Lead
    // =========================

    const handleEditLead = (lead: Lead) => {
        setEditLead({ ...lead });
    };


    const handleEditChange = (
        field: keyof Lead,
        value: string
    ) => {
        setEditLead((previous) =>
            previous
                ? { ...previous, [field]: value }
                : previous
        );
    };


    const handleUpdateLead = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        if (!editLead) {
            return;
        }

        if (!editLead.name.trim()) {
            alert("Please enter lead name.");
            return;
        }

        if (!editLead.email.trim()) {
            alert("Please enter email address.");
            return;
        }

        try {

            setEditSaving(true);

            const response = await fetch(API_URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
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
            });

            const result = await response.json();

            if (result.success) {

                setEditLead(null);

                await loadLeads();

                setSuccessMessage("Lead updated successfully!");

                setTimeout(() => {
                    setSuccessMessage("");
                }, 4000);

            } else {
                alert(result.message || "Failed to update lead.");
            }

        } catch (error) {

            console.error("Update lead failed:", error);

            alert(
                "Unable to update lead. Please check the API connection."
            );

        } finally {
            setEditSaving(false);
        }
    };


    // =========================
    // Search + Filter
    // =========================

    const filteredLeads =
        leads.filter((lead) => {

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

        });


    // =========================
    // Status Badge
    // =========================

    const getStatusClass = (status: Lead["status"]) => {

        switch (status) {

            case "New":
                return "border-success text-success";

            case "Contacted":
                return "border-warning text-warning";

            case "Qualified":
                return "border-info text-info";

            case "Won":
                return "border-primary text-primary";

            case "Lost":
                return "border-danger text-danger";

            default:
                return "border-secondary text-secondary";
        }
    };

//     const getStatusStyle = (status: string) => {

//     switch (status) {

//         case "New":
//             return {
//                 backgroundColor: "#28a745",
//                 color: "#ffffff",
//             };

//         case "Contacted":
//             return {
//                 backgroundColor: "#ffc107",
//                 color: "#212529",
//             };

//         case "Qualified":
//             return {
//                 backgroundColor: "#17a2b8",
//                 color: "#ffffff",
//             };

//         case "Won":
//             return {
//                 backgroundColor: "#007bff",
//                 color: "#ffffff",
//             };

//         case "Lost":
//             return {
//                 backgroundColor: "#dc3545",
//                 color: "#ffffff",
//             };

//         default:
//             return {
//                 backgroundColor: "#6c757d",
//                 color: "#ffffff",
//             };
//     }
// };


    return (

        <div className="content-wrapper">


            {/* Page Header */}

            <div className="page-header">

                <h3 className="page-title">
                    Leads
                </h3>

            </div>


            {/* Success Message */}

            {successMessage && (

                <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                >

                    <i className="mdi mdi-check-circle mr-2"></i>

                    {successMessage}

                    <button
                        type="button"
                        className="close"
                        onClick={() =>
                            setSuccessMessage("")
                        }
                    >

                        <span>
                            &times;
                        </span>

                    </button>

                </div>

            )}


            {/* Leads Card */}

            <div className="card">

                <div className="card-body">


                    {/* Header */}

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h4 className="card-title mb-0">
                            All Leads
                        </h4>


                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                                setShowAddModal(true)
                            }
                        >

                            <i className="mdi mdi-plus"></i>

                            &nbsp; Add Lead

                        </button>

                    </div>


                    {/* Search & Filter */}

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


                    {/* Table */}

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
                                                key={
                                                    lead.id
                                                }
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
                                                    {
                                                        lead.name
                                                    }
                                                </td>


                                                <td>
                                                    {
                                                        lead.company ||
                                                        "-"
                                                    }
                                                </td>


                                                <td>
                                                    {
                                                        lead.phone ||
                                                        "-"
                                                    }
                                                </td>


                                                <td>
                                                    {
                                                        lead.email
                                                    }
                                                </td>


                                                <td>

                                                    <select
                                                        className={`form-control form-control-sm ${getStatusClass(
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
                                                        style={{
                                                            width: "130px",
                                                            height: "36px"
                                                        }}
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

                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-info mr-2"
                                                        title="View"
                                                        onClick={() =>
                                                            handleViewLead(lead)
                                                        }
                                                    >

                                                        <i className="mdi mdi-eye"></i>

                                                    </button>


                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-warning mr-2"
                                                        title="Edit"
                                                        onClick={() =>
                                                            handleEditLead(lead)
                                                        }
                                                    >

                                                        <i className="mdi mdi-pencil"></i>

                                                    </button>


                                                    <button
                                                        type="button"
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


            {/* ========================= */}
            {/* Add Lead Modal */}
            {/* ========================= */}

            {showAddModal && (

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


                            {/* Modal Header */}

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Add New Lead
                                </h5>


                                <button
                                    type="button"
                                    className="close"
                                    onClick={
                                        closeAddModal
                                    }
                                    disabled={saving}
                                >

                                    <span>
                                        &times;
                                    </span>

                                </button>

                            </div>


                            {/* Form */}

                            <form
                                onSubmit={
                                    handleAddLead
                                }
                            >

                                <div className="modal-body">

                                    <div className="row">


                                        {/* Name */}

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    Name
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter lead name"
                                                    value={
                                                        form.name
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "name",
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* Email */}

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    Email
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>

                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    value={
                                                        form.email
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "email",
                                                            e
                                                                .target
                                                                .value
                                                        )
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
                                                    placeholder="Enter phone number"
                                                    value={
                                                        form.phone
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "phone",
                                                            e
                                                                .target
                                                                .value
                                                        )
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
                                                    placeholder="Enter company"
                                                    value={
                                                        form.company
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "company",
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                />

                                            </div>

                                        </div>


                                        {/* Subject */}

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    Subject
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter subject"
                                                    value={
                                                        form.subject
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "subject",
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                />

                                            </div>

                                        </div>


                                        {/* Source */}

                                        <div className="col-md-3">

                                            <div className="form-group">

                                                <label>
                                                    Source
                                                </label>

                                                <select
                                                    className="form-control"
                                                    value={
                                                        form.source
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "source",
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                >

                                                    <option value="Manual">
                                                        Manual
                                                    </option>

                                                    <option value="Website">
                                                        Website
                                                    </option>

                                                    <option value="Email">
                                                        Email
                                                    </option>

                                                </select>

                                            </div>

                                        </div>


                                        {/* Status */}

                                        <div className="col-md-3">

                                            <div className="form-group">

                                                <label>
                                                    Status
                                                </label>

                                                <select
                                                    className="form-control"
                                                    value={
                                                        form.status
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "status",
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
                                                    rows={5}
                                                    placeholder="Enter message"
                                                    value={
                                                        form.message
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        handleFormChange(
                                                            "message",
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                ></textarea>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* Footer */}

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={
                                            closeAddModal
                                        }
                                        disabled={saving}
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={saving}
                                    >

                                        {saving ? (

                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm mr-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>

                                                Saving...
                                            </>

                                        ) : (

                                            <>
                                                <i className="mdi mdi-content-save"></i>

                                                &nbsp;

                                                Save Lead
                                            </>

                                        )}

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            )}



            {/* ========================= */}
            {/* View Lead Modal */}
            {/* ========================= */}

            {viewLead && (

                <div
                    className="modal fade show d-block"
                    tabIndex={-1}
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >

                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Lead Details
                                </h5>

                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => setViewLead(null)}
                                >
                                    <span>&times;</span>
                                </button>

                            </div>

                            <div className="modal-body">

                                <div className="row">

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Lead ID:</strong>{" "}
                                            LD-{String(viewLead.id).padStart(3, "0")}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Name:</strong>{" "}
                                            {viewLead.name || "-"}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Email:</strong>{" "}
                                            {viewLead.email || "-"}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Phone:</strong>{" "}
                                            {viewLead.phone || "-"}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Company:</strong>{" "}
                                            {viewLead.company || "-"}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Subject:</strong>{" "}
                                            {viewLead.subject || "-"}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Source:</strong>{" "}
                                            {viewLead.source || "-"}
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <p>
                                            <strong>Status:</strong>{" "}
                                            {viewLead.status || "-"}
                                        </p>
                                    </div>

                                    <div className="col-md-12">
                                        <p>
                                            <strong>Message:</strong>
                                        </p>

                                        <div
                                            className="p-3 rounded"
                                            style={{
                                                backgroundColor: "#f8f9fa",
                                                color: "#212529",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            {viewLead.message || "-"}
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="modal-footer">

                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => {
                                        setViewLead(null);
                                        handleEditLead(viewLead);
                                    }}
                                >
                                    <i className="mdi mdi-pencil"></i>
                                    &nbsp; Edit
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => setViewLead(null)}
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}


            {/* ========================= */}
            {/* Edit Lead Modal */}
            {/* ========================= */}

            {editLead && (

                <div
                    className="modal fade show d-block"
                    tabIndex={-1}
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >

                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Update Lead
                                </h5>

                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => setEditLead(null)}
                                    disabled={editSaving}
                                >
                                    <span>&times;</span>
                                </button>

                            </div>

                            <form onSubmit={handleUpdateLead}>

                                <div className="modal-body">

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name *</label>
                                                <input
                                                    type="text"
                                                    className="form-control text-dark"
                                                    value={editLead.name}
                                                    onChange={(e) =>
                                                        handleEditChange("name", e.target.value)
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email *</label>
                                                <input
                                                    type="email"
                                                    className="form-control text-dark"
                                                    value={editLead.email}
                                                    onChange={(e) =>
                                                        handleEditChange("email", e.target.value)
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control text-dark"
                                                    value={editLead.phone || ""}
                                                    onChange={(e) =>
                                                        handleEditChange("phone", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Company</label>
                                                <input
                                                    type="text"
                                                    className="form-control text-dark"
                                                    value={editLead.company || ""}
                                                    onChange={(e) =>
                                                        handleEditChange("company", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Subject</label>
                                                <input
                                                    type="text"
                                                    className="form-control text-dark"
                                                    value={editLead.subject || ""}
                                                    onChange={(e) =>
                                                        handleEditChange("subject", e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Source</label>
                                                <select
                                                    className="form-control text-dark"
                                                    value={editLead.source || "Manual"}
                                                    onChange={(e) =>
                                                        handleEditChange("source", e.target.value)
                                                    }
                                                >
                                                    <option value="Manual">Manual</option>
                                                    <option value="Website">Website</option>
                                                    <option value="Email">Email</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Status</label>
                                                <select
                                                    className="form-control text-dark"
                                                    value={editLead.status}
                                                    onChange={(e) =>
                                                        handleEditChange(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="New">New</option>
                                                    <option value="Contacted">Contacted</option>
                                                    <option value="Qualified">Qualified</option>
                                                    <option value="Won">Won</option>
                                                    <option value="Lost">Lost</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea
                                                    className="form-control text-dark"
                                                    rows={5}
                                                    value={editLead.message || ""}
                                                    onChange={(e) =>
                                                        handleEditChange("message", e.target.value)
                                                    }
                                                ></textarea>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => setEditLead(null)}
                                        disabled={editSaving}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={editSaving}
                                    >
                                        {editSaving ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm mr-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Updating...
                                            </>
                                        ) : (
                                            <>
                                                <i className="mdi mdi-content-save"></i>
                                                &nbsp; Update Lead
                                            </>
                                        )}
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