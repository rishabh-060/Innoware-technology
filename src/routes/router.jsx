import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import AuthGaurd from "./RouteGaurds/AuthGaurd";
import GuestGuard from "./RouteGaurds/GuestGaurds";

import DashboardLayout from "../pages/Dashboard/dashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotBuilt from "../pages/NotBuilt";
import PrivacyPolicy from "../pages/FooterPages/PrivacyPolicy";
import TermsAndConditions from "../pages/FooterPages/TermsAndConditions";
import ProposalInvoicePage from "../pages/Dashboard/ProposalInvoicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      // { path: "login", element: <GuestGuard component={Login} /> },
      // { path: "signup", element: <GuestGuard component={Signup} /> },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <AuthGaurd component={DashboardLayout} />, // Protected layout
  //   children: [
  //     { index: true, element: <AuthGaurd component={Dashboard} /> },
  //     { path: "projects", element: <AuthGaurd component={NotBuilt} /> },
  //     { path: "messages", element: <AuthGaurd component={NotBuilt} /> },
  //     { path: "billing", element: <AuthGaurd component={NotBuilt} /> },
  //     { path: "reviews", element: <AuthGaurd component={NotBuilt} /> },
  //     { path: "proposals", element: <AuthGaurd component={ProposalInvoicePage} /> },
  //     { path: "*", element: <NotFound /> },
  //   ],
  // },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-condition",
    element: <TermsAndConditions />,
  },
  { path: "*", element: <NotFound /> },
]);
