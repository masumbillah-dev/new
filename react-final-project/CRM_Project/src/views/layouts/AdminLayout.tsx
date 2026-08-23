
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AdminLayout() {
  
  return (
    <div className="container-scroller">

      <Sidebar />

      <div className="container-fluid page-body-wrapper">

        <Navbar />

        <div className="main-panel">
          <Outlet />
          <Footer />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;