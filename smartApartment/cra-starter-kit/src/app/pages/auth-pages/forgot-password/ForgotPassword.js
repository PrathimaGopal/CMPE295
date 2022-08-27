import React from 'react';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {alpha} from "@mui/material/styles";
import Div from "@jumbo/shared/Div";
import {useJumboApp} from "@jumbo/hooks";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const ForgotPassword = () => {
    const {setActiveLayout} = useJumboApp();

    React.useEffect(() => {
        setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
    });

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
              image={getAssetPath(`${ASSET_IMAGES}/colin-watts.jpg`)}
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
                Forgot password
              </Typography>
            </Div>
          </Div>
          <CardContent>
            <Div sx={{ mb: 3, mt: 1 }}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                defaultValue="demo@example.com"
              />
            </Div>
            <Div sx={{ mb: 3, mt: 1 }}>
              <TextField
                fullWidth
                id="newPassword"
                label="New Password"
                type="password"
              />
            </Div>
            <Div sx={{ mb: 3, mt: 1 }}>
              <TextField
                fullWidth
                id="retypePassword"
                label="Retype Password"
                type="password"
              />
            </Div>
            <Button fullWidth variant="contained" size="large" sx={{ mb: 3 }}>
              Reset Password
            </Button>
            <Typography textAlign={"center"} variant={"body1"} mb={1}>
              Don't remember your email?{" "}
              <Link underline="none" href="#">
                Contact Support
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Div>
    );
};

export default ForgotPassword;
