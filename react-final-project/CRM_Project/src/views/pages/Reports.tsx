import { Link } from "react-router-dom";

type ReportCard = { title: string; value: string; subtitle: string; icon: string; color: string };

const reports: ReportCard[] = [
  { title: "Sales Report", value: "৳335,000", subtitle: "Current pipeline value", icon: "mdi-chart-line", color: "success" },
  { title: "Lead Report", value: "1,250", subtitle: "Total leads", icon: "mdi-account-plus", color: "info" },
  { title: "Revenue Report", value: "৳210,000", subtitle: "Collected this month", icon: "mdi-cash", color: "warning" },
  { title: "Performance", value: "78%", subtitle: "Team conversion rate", icon: "mdi-speedometer", color: "danger" },
];

export default function Reports() {
  return (
    <div className="content-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center">
        <div><h3 className="page-title mb-0">Reports</h3><p className="text-muted mb-0">CRM performance and sales overview</p></div>
        <Link to="/" className="btn btn-light"><i className="mdi mdi-arrow-left" />&nbsp; Back to Dashboard</Link>
      </div>
      <div className="row">
        {reports.map((report) => (
          <div className="col-md-6 col-xl-3 grid-margin stretch-card" key={report.title}>
            <div className="card"><div className="card-body">
              <div className="d-flex justify-content-between"><div><h6 className="text-muted">{report.title}</h6><h3>{report.value}</h3><small>{report.subtitle}</small></div><div className={`icon icon-box-${report.color}`}><span className={`mdi ${report.icon} icon-item`} /></div></div>
            </div></div>
          </div>
        ))}
      </div>
      <div className="card"><div className="card-body"><h4 className="card-title">Available Reports</h4><div className="row">
        {[
          ["/sales-report", "Sales Report", "Sales pipeline, quotations and deal value"],
          ["/lead-report", "Lead Report", "Lead sources, status and conversion"],
          ["/revenue-report", "Revenue Report", "Invoices, payments and revenue"],
          ["/performance", "Performance", "Team and activity performance"],
        ].map(([path, title, text]) => <div className="col-md-6 mb-3" key={path}><Link className="text-decoration-none" to={path}><div className="p-3 border rounded"><h5>{title}</h5><p className="text-muted mb-0">{text}</p></div></Link></div>)}
      </div></div></div>
    </div>
  );
}
