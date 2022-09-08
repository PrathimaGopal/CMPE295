import React from "react";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

const menus = [
  {
    label: "sidebar.menu.home",
    type: "section",
    children: [
      {
        uri: "/resident/dashboard",
        label: "Dashboard",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/resident/serviceRequest",
        label: "Service Request",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/resident/messages",
        label: "Messages",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/resident/settings",
        label: "Settings",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/resident/Logout",
        label: "Logout",
        type: "nav-item",
        icon: <ListAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
];

export default menus;
