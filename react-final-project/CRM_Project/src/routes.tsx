import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./views/layouts/AdminLayout";
import Dashboard from "./views/pages/Dashboard";
import Leads from "./views/pages/Leads";
import Contact from "./views/pages/contact";
import StaticPage from "./views/pages/StaticPage";
import Activities from "./views/pages/Activities";
import Pipeline from "./views/pages/Pipeline";
import Reports from "./views/pages/Reports";
import ReportDetail from "./views/pages/ReportDetail";
import Settings from "./views/pages/Settings";

const page = (configKey: Parameters<typeof StaticPage>[0]["configKey"]) => <StaticPage configKey={configKey} />;

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/leads", element: <Leads /> },
      { path: "/contacts", element: page("contacts") },
      { path: "/companies", element: page("companies") },
      { path: "/deals", element: page("deals") },
      { path: "/activities", element: <Activities /> },
      { path: "/pipeline", element: <Pipeline /> },
      { path: "/quotes", element: page("quotes") },
      { path: "/invoices", element: page("invoices") },
      { path: "/payments", element: page("payments") },
      { path: "/tasks", element: page("tasks") },
      { path: "/meetings", element: page("meetings") },
      { path: "/calls", element: page("calls") },
      { path: "/calendar", element: page("calendar") },
      { path: "/products", element: page("products") },
      { path: "/categories", element: page("categories") },
      { path: "/brands", element: page("brands") },
      { path: "/tickets", element: page("tickets") },
      { path: "/knowledge-base", element: page("knowledgeBase") },
      { path: "/faq", element: page("faq") },
      { path: "/users", element: page("users") },
      { path: "/roles", element: page("roles") },
      { path: "/permissions", element: page("permissions") },
      { path: "/reports", element: <Reports /> },
      { path: "/sales-report", element: <ReportDetail title="Sales Report" value="৳335,000" rows={[["Website Development", "Rahim Technologies", "৳80,000", "Won"], ["CRM Development", "ABC Limited", "৳150,000", "Pending"], ["Digital Marketing", "XYZ Corporation", "৳60,000", "Completed"]]} /> },
      { path: "/lead-report", element: <ReportDetail title="Lead Report" value="1,250" rows={[["Website", "Admin", "680", "Completed"], ["Referral", "Sales", "320", "Pending"], ["Manual", "Admin", "250", "Completed"]]} /> },
      { path: "/revenue-report", element: <ReportDetail title="Revenue Report" value="৳210,000" rows={[["August Collection", "Accounts", "৳210,000", "Paid"], ["Pending Invoices", "Accounts", "৳90,000", "Pending"], ["Overdue", "Accounts", "৳20,000", "Pending"]]} /> },
      { path: "/performance", element: <ReportDetail title="Performance" value="78%" rows={[["Lead Conversion", "Sales Team", "78%", "Completed"], ["Follow-up", "Admin", "92%", "Completed"], ["Deal Closing", "Sales Team", "64%", "Pending"]]} /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
  { path: "/contact", element: <Contact /> },
]);
