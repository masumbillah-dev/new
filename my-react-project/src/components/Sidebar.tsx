import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import logo2 from "../assets/images/logo2.svg"
import icon from "../assets/images/icon.png"


function Sidebar() {
    const [openMenu, setOpenMenu] = useState("");

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? "" : menu);
    };

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">

                <NavLink className="sidebar-brand brand-logo" to="/">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </NavLink>

                <NavLink className="sidebar-brand brand-logo-mini" to="/">
                    <img
                        src={logo2}
                        alt="logo"
                        
                    />
                </NavLink>

            </div>

            <ul className="nav">

                <li className="nav-item profile">

                    <div className="profile-desc">

                        <div className="profile-pic">

                            <div className="count-indicator">

                                <img
                                    className="img-xs rounded-circle"
                                    src={icon}
                                    alt=""
                                />

                                <span className="count bg-success"></span>

                            </div>

                            <div className="profile-name">

                                <h5 className="mb-0 font-weight-normal">
                                    Masum Billah
                                </h5>

                                <span>CRM Admin</span>

                            </div>

                        </div>

                    </div>

                </li>

                <li className="nav-item nav-category">
                    <span className="nav-link">
                        CRM MANAGEMENT
                    </span>
                </li>

                <li className="nav-item menu-items">

                    <NavLink className="nav-link" to="/">

                        <span className="menu-icon">
                            <i className="mdi mdi-view-dashboard"></i>
                        </span>

                        <span className="menu-title">
                            Dashboard
                        </span>

                    </NavLink>

                </li>

                <li className="nav-item menu-items">

                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu("crm");
                        }}
                    >

                        <span className="menu-icon">
                            <i className="mdi mdi-account-group"></i>
                        </span>

                        <span className="menu-title">
                            CRM
                        </span>

                        <i
                            className={`menu-arrow ${openMenu === "crm" ? "active" : ""
                                }`}
                        ></i>

                    </a>

                    <div
                        className={`collapse ${openMenu === "crm" ? "show" : ""
                            }`}
                    >

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/leads"
                                >
                                    Leads
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/contacts"
                                >
                                    Contacts
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/companies"
                                >
                                    Companies
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/deals"
                                >
                                    Deals
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </li>

                <li className="nav-item menu-items">

                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu("sales");
                        }}
                    >

                        <span className="menu-icon">
                            <i className="mdi mdi-cash-multiple"></i>
                        </span>

                        <span className="menu-title">
                            Sales
                        </span>

                        <i
                            className={`menu-arrow ${openMenu === "sales" ? "active" : ""
                                }`}
                        ></i>

                    </a>

                    <div
                        className={`collapse ${openMenu === "sales" ? "show" : ""
                            }`}
                    >

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/pipeline"
                                >
                                    Pipeline
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/quotes"
                                >
                                    Quotes
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/invoices"
                                >
                                    Invoices
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/payments"
                                >
                                    Payments
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </li>

                <li className="nav-item menu-items">

                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu("activities");
                        }}
                    >

                        <span className="menu-icon">
                            <i className="mdi mdi-calendar-check"></i>
                        </span>

                        <span className="menu-title">
                            Activities
                        </span>

                        <i
                            className={`menu-arrow ${openMenu === "activities" ? "active" : ""
                                }`}
                        ></i>

                    </a>

                    <div
                        className={`collapse ${openMenu === "activities" ? "show" : ""
                            }`}
                    >

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tasks">
                                    Tasks
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/meetings">
                                    Meetings
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/calls">
                                    Calls
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/calendar">
                                    Calendar
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </li>

                <li className="nav-item menu-items">

                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu("products");
                        }}
                    >

                        <span className="menu-icon">
                            <i className="mdi mdi-package-variant-closed"></i>
                        </span>

                        <span className="menu-title">
                            Products
                        </span>

                        <i
                            className={`menu-arrow ${openMenu === "products" ? "active" : ""
                                }`}
                        ></i>

                    </a>

                    <div
                        className={`collapse ${openMenu === "products" ? "show" : ""
                            }`}
                    >

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">
                                    Categories
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/brands">
                                    Brands
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </li>

                <li className="nav-item menu-items">

                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu("support");
                        }}
                    >

                        <span className="menu-icon">
                            <i className="mdi mdi-lifebuoy"></i>
                        </span>

                        <span className="menu-title">
                            Support
                        </span>

                        <i
                            className={`menu-arrow ${openMenu === "support" ? "active" : ""
                                }`}
                        ></i>

                    </a>

                    <div
                        className={`collapse ${openMenu === "support" ? "show" : ""
                            }`}
                    >

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tickets">
                                    ChatBoat
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/knowledge-base">
                                    FAQ
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faq">
                                   Live Chat
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </li>

                <li className="nav-item menu-items">

                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu("administration");
                        }}
                    >

                        <span className="menu-icon">
                            <i className="mdi mdi-shield-account"></i>
                        </span>

                        <span className="menu-title">
                            Administration
                        </span>

                        <i
                            className={`menu-arrow ${openMenu === "administration" ? "active" : ""
                                }`}
                        ></i>

                    </a>

                    <div
                        className={`collapse ${openMenu === "administration" ? "show" : ""
                            }`}
                    >

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">
                                    Users
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/roles">
                                    Roles
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/permissions">
                                    Permissions
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </li>

                <li className="nav-item menu-items">

                    <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu("reports");
                        }}
                    >

                        <span className="menu-icon">
                            <i className="mdi mdi-chart-line"></i>
                        </span>

                        <span className="menu-title">
                            Reports
                        </span>

                        <i
                            className={`menu-arrow ${openMenu === "reports" ? "active" : ""
                                }`}
                        ></i>

                    </a>

                    <div
                        className={`collapse ${openMenu === "reports" ? "show" : ""
                            }`}
                    >

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sales-report">
                                    Sales Report
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/lead-report">
                                    Lead Report
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/revenue-report">
                                    Revenue Report
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/performance">
                                    Performance
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </li>

                <li className="nav-item menu-items">

                    <NavLink className="nav-link" to="/settings">

                        <span className="menu-icon">
                            <i className="mdi mdi-settings"></i>
                        </span>

                        <span className="menu-title">
                            Settings
                        </span>

                    </NavLink>

                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;