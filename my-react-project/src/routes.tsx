import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../src/views/layouts/AdminLayout";

import Dashboard from "../src/views/pages/Dashboard";
import Leads from "../src/views/pages/Leads";
import Contact from "../src/views/pages/contact";


export const routes = createBrowserRouter([

    // =========================
    // Admin / CRM Routes
    // =========================

    {
        path: "/",
        element: <AdminLayout />,

        children: [

            {
                index: true,
                element: <Dashboard />,
            },

            {
                path: "/leads",
                element: <Leads />,
            },

        ],
    },


    // =========================
    // Public Routes
    // =========================

    {
        path: "/contact",
        element: <Contact />,
    },

]);