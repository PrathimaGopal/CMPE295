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
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/addNewUser",
    element: <AddNewUser />,
  },
];

export default routes;