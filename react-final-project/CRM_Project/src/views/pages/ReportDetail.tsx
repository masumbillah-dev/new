import { Link } from "react-router-dom";

type Props = { title: string; value: string; rows: Array<[string, string, string, string]> };

export default function ReportDetail({ title, value, rows }: Props) {
  return (
    <div className="content-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center"><div><h3 className="page-title mb-0">{title}</h3><p className="text-muted mb-0">Report for presentation</p></div><Link to="/" className="btn btn-light"><i className="mdi mdi-arrow-left" />&nbsp; Back to Dashboard</Link></div>
      <div className="row"><div className="col-md-4"><div className="card"><div className="card-body"><h6 className="text-muted">Summary</h6><h2>{value}</h2><p className="mb-0">Current figure</p></div></div></div><div className="col-md-8"><div className="card"><div className="card-body"><h4 className="card-title">{title}</h4><div className="table-responsive"><table className="table table-hover"><thead><tr><th>Item</th><th>Owner</th><th>Value</th><th>Status</th></tr></thead><tbody>{rows.map(([a,b,c,d],i)=><tr key={i}><td>{a}</td><td>{b}</td><td>{c}</td><td><label className={`badge ${d === "Completed" || d === "Won" || d === "Paid" ? "badge-success" : "badge-warning"}`}>{d}</label></td></tr>)}</tbody></table></div></div></div></div></div>
    </div>
  );
}
