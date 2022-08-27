import React from "react";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

const menus = [
    {
        label: 'sidebar.menu.home',
        type: "section",
        children: [
            {
                uri: "/",
                label: 'Sample Page',
                type: "nav-item",
                icon: <ListAltOutlinedIcon sx={{fontSize: 20}}/>
            },
        ]
    },
];

export default menus;
