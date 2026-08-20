import { StrictMode } from "react";
import { createRoot } from "react-dom/client";



import "./index.css";
import App from "./App";

// CSS
import "./assets/vendors/mdi/css/materialdesignicons.min.css";
import "./assets/vendors/css/vendor.bundle.base.css";
import "./assets/vendors/jvectormap/jquery-jvectormap.css";
import "./assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "./assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "./assets/vendors/owl-carousel-2/owl.theme.default.min.css";
import "./assets/css/style.css";

// Theme JS
import "./assets/js/off-canvas.js";
import "./assets/js/hoverable-collapse.js";
import "./assets/js/misc.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);