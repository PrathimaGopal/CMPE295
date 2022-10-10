import React from "react";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";

const menus = [
  {
    label: "sidebar.menu.home",
    type: "section",
    children: [
      {
        uri: "/admin/dashboard",
        label: "Dashboard",
        type: "nav-item",
        icon: <DashboardIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/messages",
        label: "Messages",
        type: "nav-item",
        icon: <MessageIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/addNewUser",
        label: "Add New User",
        type: "nav-item",
        icon: <PersonAddIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/removeUser",
        label: "Remove User",
        type: "nav-item",
        icon: <PersonRemoveIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/settings",
        label: "Settings",
        type: "nav-item",
        icon: <SettingsIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/logout",
        label: "Logout",
        type: "nav-item",
        icon: <LogoutIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
];

export default menus;
