import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";
import BuildIcon from "@mui/icons-material/Build";
import DashboardIcon from '@mui/icons-material/Dashboard';

const menus = [
  {
    label: "sidebar.menu.home",
    type: "section",
    children: [
      {
        uri: "/resident/dashboard",
        label: "Dashboard",
        type: "nav-item",
        icon: <DashboardIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/resident/serviceRequest",
        label: "Service Request",
        type: "nav-item",
        icon: <BuildIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/resident/settings",
        label: "Settings",
        type: "nav-item",
        icon: <SettingsIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/resident/Logout",
        label: "Logout",
        type: "nav-item",
        icon: <LogoutIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
];

export default menus;
