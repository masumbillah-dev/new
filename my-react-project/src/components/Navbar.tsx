import { useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import logo from "../assets/images/logo.svg"


//safi vai

import icon from "../assets/images/icon.png";

export const products = [
icon,
];





function Navbar() {
    const [createOpen, setCreateOpen] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <nav className="navbar p-0 fixed-top d-flex flex-row">

            {/* Mobile Logo */}
            <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                <a className="navbar-brand brand-logo-mini" href="/">
                    <img src={icon} alt="logo" />
                </a>
            </div>

            <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">

                {/* Sidebar Minimize Button */}
                <button
                    className="navbar-toggler navbar-toggler align-self-center"
                    type="button"
                    onClick={() => {
                        $("body").toggleClass("sidebar-icon-only");
                    }}
                >
                    <span className="mdi mdi-menu"></span>
                </button>

                {/* Search */}
                <ul className="navbar-nav w-100">

                    <li className="nav-item w-100">

                        <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search leads, contacts, companies..."
                            />

                        </form>

                    </li>

                </ul>

                {/* Right Navbar */}
                <ul className="navbar-nav navbar-nav-right">

                    {/* Create */}
                    <li className="nav-item dropdown d-none d-lg-block">

                        <a
                            href="#"
                            className="nav-link btn btn-success create-new-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setCreateOpen(!createOpen);
                            }}
                        >
                            + Create
                        </a>

                        {createOpen && (

                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list show">

                                <h6 className="p-3 mb-0">
                                    Quick Create
                                </h6>

                                <div className="dropdown-divider"></div>

                                {/* Lead */}
                               
                                <NavLink
                                    to="/leads"
                                    className="dropdown-item preview-item"
                                >

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-account-plus text-success"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">
                                            Leads
                                        </p>
                                    </div>

                                </NavLink>

                                <div className="dropdown-divider"></div>

                                {/* Contact */}
                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-account-multiple text-info"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">
                                            Contact
                                        </p>
                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                {/* Company */}
                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-domain text-warning"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">
                                            Company
                                        </p>
                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                {/* Deal */}
                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-briefcase text-danger"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">
                                            Deal
                                        </p>
                                    </div>

                                </a>

                            </div>

                        )}

                    </li>

                    {/* Messages */}
                    <li className="nav-item dropdown border-left">

                        <a
                            href="#"
                            className="nav-link count-indicator"
                            onClick={(e) => {
                                e.preventDefault();
                                setMessageOpen(!messageOpen);
                            }}
                        >
                            <i className="mdi mdi-email"></i>
                            <span className="count bg-success"></span>
                        </a>

                        {messageOpen && (

                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list show">

                                <h6 className="p-3 mb-0">
                                    Messages
                                </h6>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <img
                                            src={logo}
                                            className="rounded-circle profile-pic"
                                            alt=""
                                        />
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            New Lead Assigned
                                        </p>

                                        <p className="text-muted mb-0">
                                            2 minutes ago
                                        </p>

                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <img
                                            src={icon}
                                            className="rounded-circle profile-pic"
                                            alt=""
                                        />
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            Meeting Reminder
                                        </p>

                                        <p className="text-muted mb-0">
                                            10 minutes ago
                                        </p>

                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                <p className="p-3 mb-0 text-center">
                                    View All Messages
                                </p>

                            </div>

                        )}

                    </li>

                    {/* Notifications */}
                    <li className="nav-item dropdown border-left">

                        <a
                            href="#"
                            className="nav-link count-indicator"
                            onClick={(e) => {
                                e.preventDefault();
                                setNotificationOpen(!notificationOpen);
                            }}
                        >
                            <i className="mdi mdi-bell"></i>
                            <span className="count bg-danger"></span>
                        </a>

                        {notificationOpen && (

                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list show">

                                <h6 className="p-3 mb-0">
                                    Notifications
                                </h6>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-account-plus text-success"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            New Lead Added
                                        </p>

                                        <p className="text-muted mb-0">
                                            Just now
                                        </p>

                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-calendar text-info"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            Meeting Today
                                        </p>

                                        <p className="text-muted mb-0">
                                            2:30 PM
                                        </p>

                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-cash text-warning"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            New Invoice Paid
                                        </p>

                                        <p className="text-muted mb-0">
                                            Today
                                        </p>

                                    </div>

                                </a>

                            </div>

                        )}

                    </li>

                    {/* Profile */}
                    <li className="nav-item dropdown">

                        <a
                            href="#"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setProfileOpen(!profileOpen);
                            }}
                        >

                            <div className="navbar-profile">

                                <img
                                    className="img-xs rounded-circle"
                                    src={icon}
                                    alt=""
                                />

                                <p className="mb-0 d-none d-sm-block navbar-profile-name">
                                    Administrator
                                </p>

                                <i className="mdi mdi-menu-down d-none d-sm-block"></i>

                            </div>

                        </a>

                        {profileOpen && (

                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list show">

                                <h6 className="p-3 mb-0">
                                    CRM Admin
                                </h6>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-account text-info"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            My Profile
                                        </p>

                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-cog text-success"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            Settings
                                        </p>

                                    </div>

                                </a>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item preview-item" href="#">

                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-logout text-danger"></i>
                                        </div>
                                    </div>

                                    <div className="preview-item-content">

                                        <p className="preview-subject mb-1">
                                            Logout
                                        </p>

                                    </div>

                                </a>

                            </div>

                        )}

                    </li>

                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                    type="button"
                    data-toggle="offcanvas"
                >
                    <span className="mdi mdi-format-line-spacing"></span>
                </button>

            </div>

        </nav>
    );
}

export default Navbar;