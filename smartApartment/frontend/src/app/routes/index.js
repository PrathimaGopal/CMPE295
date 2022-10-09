import React from "react";
import Home from "../pages/home";
import HomePage from "app/pages/Others/HomePage";
import Login1 from "app/pages/auth-pages/login1/Login1";
import ForgotPassword from "app/pages/auth-pages/forgot-password";
import ContactUs from "app/pages/Others/ContactUs";
import AboutUs from "app/pages/Others/AboutUs";
import ServiceRequest from "app/pages/ResidentDashboard/ServiceRequest";
import ResidentDashboard from "app/pages/ResidentDashboard/Dashboard";
import AdminDashboard from "app/pages/AdminDashboard/Dashboard/AdminDashboard";
import AddNewUser from "app/pages/AdminDashboard/Add New User";
import SecurityKey from "app/pages/auth-pages/security-key/SecurityKey";
import RemoveUser from "app/pages/AdminDashboard/Remove User";
import AdminSettings from "app/pages/AdminDashboard/AdminSettings";
import ResidentSettings from "app/pages/ResidentDashboard/ResidentSettings";
import AdminMessages from "app/pages/AdminDashboard/AdminMessages";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login1 />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/resident/servicerequest",
    element: <ServiceRequest />,
  },
  {
    path: "/resident/dashboard",
    element: <ResidentDashboard />,
  },
  {
    path: "/resident/settings",
    element: <ResidentSettings />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/addNewUser",
    element: <AddNewUser />,
  },
  {
    path: "/admin/removeUser",
    element: <RemoveUser />,
  },
  {
    path: "/admin/securityKey",
    element: <SecurityKey />,
  },
  {
    path: "/admin/settings",
    element: <AdminSettings />,
  },
  {
    path: "/admin/messages",
    element: <AdminMessages />,
  },
];

export default routes;