import React from "react";
import { useNavigate } from "react-router-dom";
import Div from "@jumbo/shared/Div";
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "../../../layouts/layouts";

const AdminDashboard = () => {
  const { setActiveLayout } = useJumboApp();

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.VERTICAL_ADMIN);
  });

  return <Div>Admin Dashboard</Div>;
};

export default AdminDashboard;
