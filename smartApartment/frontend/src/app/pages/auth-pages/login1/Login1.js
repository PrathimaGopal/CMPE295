import React from "react";
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import { alpha } from "@mui/material/styles";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Div from "@jumbo/shared/Div";
//import JumboTextField from "@jumbo/components/JumboFormik/JumboTextField";
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "../../../layouts/layouts";
import { ASSET_IMAGES } from "../../../utils/constants/paths";
import UserPool from "app/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const Login1 = () => {
  const navigate = useNavigate();
  const { setActiveLayout } = useJumboApp();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
  });

  const onSignIn = (e) => {
    console.log("Inside aws userPool call");
    //Anjali@sjsu295/anjali.poddar0207@gmail.com
    // setEmailInput(email.target.value);
    // setPasswordInput(password.target.value);
    e.preventDefault();
    const user = new CognitoUser({
      Username: emailInput,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: emailInput,
      Password: passwordInput,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess", data);
        navigate("/resident/dashboard", { replace: true });
      },
      onFailure: (data) => {
        console.error("onFailure", data);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired", data);
        navigate("/resident/dashboard", { replace: true });
        //alert("Enter valid credentials");
      },
    });
  };

  return (
    <Div
      sx={{
        flex: 1,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: (theme) => theme.spacing(4),
      }}
    >
      <Div sx={{ mb: 3, display: "inline-flex" }}>
        <Link href="#" underline="none" sx={{ display: "inline-flex" }}>
          <img src={`${ASSET_IMAGES}/logo.png`} alt="Jumbo React" />
        </Link>
      </Div>
      <Card sx={{ maxWidth: "100%", width: 360, mb: 4 }}>
        <Div sx={{ position: "relative", height: "200px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={`${ASSET_IMAGES}/colin-watts.jpg`}
          />
          <Div
            sx={{
              flex: 1,
              inset: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              backgroundColor: (theme) =>
                alpha(theme.palette.common.black, 0.5),
              p: (theme) => theme.spacing(3),
            }}
          >
            <Typography
              variant={"h2"}
              sx={{
                color: "common.white",
                fontSize: "1.5rem",
                mb: 0,
              }}
            >
              Sign In
            </Typography>
          </Div>
        </Div>
        <CardContent sx={{ pt: 0 }}>
          <form
            style={{ textAlign: "left" }}
            noValidate
            autoComplete="off"
            onSubmit={onSignIn}
          >
            <br /> <br />
            <Div sx={{ mb: 3, mt: 1 }}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                placeholder="abc@gmail.com"
                onChange={handleEmailChange}
              />
            </Div>
            <Div sx={{ mb: 2, mt: 1 }}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
              />
            </Div>
            <Typography textAlign={"right"} variant={"body1"}>
              <Link underline="none" href="#">
                Forgot your password?
              </Link>
            </Typography>
            <Div sx={{ mb: 1 }}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </Div>
            <LoadingButton
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{ mb: 3 }}
            >
              Login
            </LoadingButton>
          </form>
        </CardContent>
      </Card>
    </Div>
  );
};

export default Login1;
