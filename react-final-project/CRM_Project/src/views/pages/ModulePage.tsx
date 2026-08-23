import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

type Row = Record<string, string | number> & { id: number };

type Column = {
  key: string;
  label: string;
};

export type ModuleConfig = {
  title: string;
  singular: string;
  idPrefix: string;
  icon: string;
  columns: Column[];
  initialRows: Row[];
  searchPlaceholder?: string;
  statuses?: string[];
  statusKey?: string;
  description?: string;
};

type ModulePageProps = {
  config: ModuleConfig;
};

function formatValue(value: string | number) {
  if (typeof value === "number") return value.toLocaleString();
  return value;
}

function ModulePage({ config }: ModulePageProps) {
  const [rows, setRows] = useState<Row[]>(config.initialRows);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [modal, setModal] = useState<"add" | "view" | "edit" | null>(null);
  const [selected, setSelected] = useState<Row | null>(null);
  const [form, setForm] = useState<Row>(() => ({
    id: 0,
    ...Object.fromEntries(config.columns.map((column) => [column.key, ""])),
  }));

  const filteredRows = useMemo(() => {
    const query = search.toLowerCase().trim();
    return rows.filter((row) => {
      const matchesSearch = !query || Object.values(row).some((value) =>
        String(value).toLowerCase().includes(query)
      );
      const matchesStatus =
        statusFilter === "All" ||
        !config.statusKey ||
        String(row[config.statusKey] ?? "") === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [rows, search, statusFilter, config.statusKey]);

  const openAdd = () => {
    setSelected(null);
    setForm({
      id: rows.length ? Math.max(...rows.map((row) => row.id)) + 1 : 1,
      ...Object.fromEntries(
        config.columns.map((column) => [
          column.key,
          column.key === config.statusKey
            ? config.statuses?.[0] ?? "Active"
            : "",
        ])
      ),
    });
    setModal("add");
  };

  const openEdit = (row: Row) => {
    setSelected(row);
    setForm({ ...row });
    setModal("edit");
  };

  const openView = (row: Row) => {
    setSelected(row);
    setModal("view");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (modal === "edit") {
      setRows((current) => current.map((row) => (row.id === form.id ? form : row)));
    } else {
      setRows((current) => [...current, form]);
    }
    setModal(null);
    setSelected(null);
  };

  const deleteRow = (id: number) => {
    setRows((current) => current.filter((row) => row.id !== id));
  };

  const statusClass = (value: string) => {
    const normalized = value.toLowerCase();
    if (["active", "won", "completed", "paid", "resolved", "available", "open"].includes(normalized)) return "badge-success";
    if (["pending", "negotiation", "proposal", "processing"].includes(normalized)) return "badge-warning";
    if (["lost", "inactive", "cancelled", "overdue", "closed"].includes(normalized)) return "badge-danger";
    return "badge-info";
  };

  return (
    <div className="content-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center">
        <div>
          <h3 className="page-title mb-1">{config.title}</h3>
          {config.description && <p className="text-muted mb-0">{config.description}</p>}
        </div>
        <Link to="/" className="btn btn-light">
          <i className="mdi mdi-arrow-left" />&nbsp; Back to Dashboard
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h4 className="card-title mb-1">All {config.title}</h4>
              <small className="text-muted">{filteredRows.length} record(s)</small>
            </div>
            <button className="btn btn-primary" onClick={openAdd}>
              <i className="mdi mdi-plus" />&nbsp; Add {config.singular}
            </button>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                className="form-control"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={config.searchPlaceholder ?? `Search ${config.title.toLowerCase()}...`}
              />
            </div>
            {config.statuses && config.statusKey && (
              <div className="col-md-3">
                <select className="form-control" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                  <option value="All">All Status</option>
                  {config.statuses.map((status) => <option key={status} value={status}>{status}</option>)}
                </select>
              </div>
            )}
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  {config.columns.map((column) => <th key={column.key}>{column.label}</th>)}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length ? filteredRows.map((row) => (
                  <tr key={row.id}>
                    <td>{config.idPrefix}-{String(row.id).padStart(3, "0")}</td>
                    {config.columns.map((column) => (
                      <td key={column.key}>
                        {column.key === config.statusKey ? (
                          <label className={`badge ${statusClass(String(row[column.key] ?? ""))}`}>
                            {String(row[column.key] ?? "-")}
                          </label>
                        ) : formatValue(row[column.key] ?? "-")}
                      </td>
                    ))}
                    <td className="text-nowrap">
                      <button className="btn btn-sm btn-info mr-2" title="View" onClick={() => openView(row)}>
                        <i className="mdi mdi-eye" />
                      </button>
                      <button className="btn btn-sm btn-warning mr-2" title="Edit" onClick={() => openEdit(row)}>
                        <i className="mdi mdi-pencil" />
                      </button>
                      <button className="btn btn-sm btn-danger" title="Delete" onClick={() => deleteRow(row.id)}>
                        <i className="mdi mdi-delete" />
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={config.columns.length + 2} className="text-center py-4">No {config.title.toLowerCase()} found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,.6)" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal === "view" ? `${config.singular} Details` : modal === "edit" ? `Edit ${config.singular}` : `Add ${config.singular}`}</h5>
                <button type="button" className="close" onClick={() => setModal(null)}><span>&times;</span></button>
              </div>

              {modal === "view" && selected ? (
                <div className="modal-body">
                  <div className="row">
                    {config.columns.map((column) => (
                      <div className="col-md-6" key={column.key}>
                        <p><strong>{column.label}:</strong>{" "}{formatValue(selected[column.key] ?? "-")}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="row">
                      {config.columns.map((column) => (
                        <div className={column.key === "description" || column.key === "message" || column.key === "notes" ? "col-md-12" : "col-md-6"} key={column.key}>
                          <div className="form-group">
                            <label>{column.label}</label>
                            {column.key === config.statusKey ? (
                              <select className="form-control" value={String(form[column.key] ?? "")} onChange={(event) => setForm({ ...form, [column.key]: event.target.value })}>
                                {(config.statuses ?? ["Active", "Inactive"]).map((status) => <option key={status}>{status}</option>)}
                              </select>
                            ) : column.key === "description" || column.key === "message" || column.key === "notes" ? (
                              <textarea className="form-control" rows={4} value={String(form[column.key] ?? "")} onChange={(event) => setForm({ ...form, [column.key]: event.target.value })} />
                            ) : (
                              <input className="form-control" value={String(form[column.key] ?? "")} onChange={(event) => setForm({ ...form, [column.key]: event.target.value })} />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-light" onClick={() => setModal(null)}>Cancel</button>
                    <button type="submit" className="btn btn-primary">{modal === "edit" ? "Update" : "Save"}</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModulePage;
