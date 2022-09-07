import React from "react";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const menus = [
  {
    label: "sidebar.menu.home",
    type: "section",
    children: [
      {
        uri: "/admin/dashboard",
        label: "Dashboard",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/messages",
        label: "Messages",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/addNewUser",
        label: "Add New User",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/removeResident",
        label: "Remove Resident",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/settings",
        label: "Settings",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/admin/logout",
        label: "Logout",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
];

export default menus;
