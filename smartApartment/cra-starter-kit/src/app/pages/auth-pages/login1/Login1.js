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
import { auth } from "@jumbo/services/auth/firebase/firebase";
import * as yup from "yup";
import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Div from "@jumbo/shared/Div";
import JumboTextField from "@jumbo/components/JumboFormik/JumboTextField";
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "../../../layouts/layouts";
import { ASSET_IMAGES } from "../../../utils/constants/paths";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const Login1 = () => {
  const navigate = useNavigate();
  const { setActiveLayout } = useJumboApp();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [userType, setUserType] = useState("");

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
    // setEmailInput(email.target.value);
    // setPasswordInput(password.target.value);
    setUserType("resident");
    let hardcodedCred = {
      email: "abc@abc.com",
      password: "123",
      userType: "resident",
    };
    if (
      emailInput === hardcodedCred.email &&
      passwordInput === hardcodedCred.password &&
      userType === hardcodedCred.userType
    ) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      console.log("true");
      navigate("/resident/dashboard", { replace: true });
    } else {
      //bad combination
      console.log("Incorrect values");
      alert("Enter valid credentials");
    }
    e.preventDefault();
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
