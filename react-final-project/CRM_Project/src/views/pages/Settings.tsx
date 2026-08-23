import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({ company: "Nexus CRM", email: "info@example.com", phone: "01700000000", currency: "BDT", timezone: "Asia/Dhaka", notifications: true });
  const submit = (event: FormEvent) => { event.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2500); };
  return (
    <div className="content-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center"><h3 className="page-title mb-0">Settings</h3><Link to="/" className="btn btn-light"><i className="mdi mdi-arrow-left" />&nbsp; Back to Dashboard</Link></div>
      <div className="card"><div className="card-body"><h4 className="card-title">General Settings</h4>{saved && <div className="alert alert-success">Settings saved successfully.</div>}
        <form onSubmit={submit}><div className="row">
          <div className="col-md-6"><div className="form-group"><label>Company Name</label><input className="form-control" value={settings.company} onChange={e => setSettings({...settings, company:e.target.value})}/></div></div>
          <div className="col-md-6"><div className="form-group"><label>Official Email</label><input type="email" className="form-control" value={settings.email} onChange={e => setSettings({...settings, email:e.target.value})}/></div></div>
          <div className="col-md-6"><div className="form-group"><label>Phone</label><input className="form-control" value={settings.phone} onChange={e => setSettings({...settings, phone:e.target.value})}/></div></div>
          <div className="col-md-3"><div className="form-group"><label>Currency</label><select className="form-control" value={settings.currency} onChange={e => setSettings({...settings, currency:e.target.value})}><option>BDT</option><option>USD</option><option>EUR</option></select></div></div>
          <div className="col-md-3"><div className="form-group"><label>Timezone</label><select className="form-control" value={settings.timezone} onChange={e => setSettings({...settings, timezone:e.target.value})}><option>Asia/Dhaka</option><option>UTC</option></select></div></div>
          <div className="col-md-12"><div className="form-check"><input className="form-check-input" type="checkbox" checked={settings.notifications} onChange={e => setSettings({...settings, notifications:e.target.checked})}/> <br /> <label className="form-check-label">Enable admin notifications</label></div></div>
        </div><button className="btn btn-primary mt-4">Save Settings</button></form>
      </div></div>
    </div>
  );
}
