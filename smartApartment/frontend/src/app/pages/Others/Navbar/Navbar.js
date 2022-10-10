import React from "react";
import Stack from "@mui/material/Stack";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const navigateToContactUs = () => {
        navigate("/contactUs");
    };

    const navigateToAboutUs = () => {
      navigate("/aboutUs");
    }; 

    const navigateHome = () => {
        navigate("/");
    };

    const navigateToLogin = () => {
      navigate("/login");
    };

  return (
    <AppBar
      position="static"
      style={{ height: 105, backgroundColor: "#3E4E50" }}
    >
      <br />
      <Toolbar style={{ fontSize: 30 }}>
        SMART APARTMENTS
        <Stack spacing={2} direction="row" style={{ marginLeft: 800 }}>
          <Button variant="text" style={{ color: "white" }} onClick={navigateHome}>
            Home
          </Button>
          <Button variant="text" style={{ color: "white" }} onClick={navigateToAboutUs}>
            About Us
          </Button>
          <Button variant="text" style={{ color: "white" }} onClick={navigateToContactUs}>
            Contact Us
          </Button>
          <Button variant="text" style={{ color: "white" }} onClick={navigateToLogin}>
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
