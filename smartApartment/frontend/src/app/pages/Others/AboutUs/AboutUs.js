import React from "react";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Div from "@jumbo/shared/Div";
import { ASSET_IMAGES } from "../../../utils/constants/paths";
import { getAssetPath } from "../../../utils/appHelpers";
import { LAYOUT_NAMES } from "../../../layouts/layouts";
import { useJumboApp } from "@jumbo/hooks";
import Navbar from "../Navbar/Navbar";

const AboutUs = () => {

  const { setActiveLayout } = useJumboApp();

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
  });

  return (
    <React.Fragment>
      <Navbar />
      <br />
      <Div style={{ marginRight: 6 + "em", marginLeft: 6 + "em" }}>
        <Card>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Div
                sx={{ position: "relative", height: 0, paddingBottom: "69.5%" }}
              >
                <CardMedia
                  component="img"
                  image={getAssetPath(
                    `${ASSET_IMAGES}/callouts/Why-us.jpeg`,
                    "640x640"
                  )}
                  alt=""
                  sx={{
                    inset: 0,
                    height: "100%",
                    position: "absolute",
                  }}
                />
              </Div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                alignSelf: "center",
                p: 3,
                textAlign: { sm: "left", md: "right" },
                order: { md: -1 },
              }}
            >
              <Typography variant="h2" mb={2}>
                Why SAC apartments?
              </Typography>
              <Typography variant="body1" mb={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Div
                sx={{ position: "relative", height: 0, paddingBottom: "69.5%" }}
              >
                <CardMedia
                  component="img"
                  image={getAssetPath(
                    `${ASSET_IMAGES}/callouts/what-we-do.png`,
                    "640x640"
                  )}
                  alt=""
                  sx={{
                    inset: 0,
                    height: "100%",
                    position: "absolute",
                  }}
                />
              </Div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ alignSelf: "center", p: 3 }}>
              <Typography variant="h2" mb={2}>
                What do we do?
              </Typography>
              <Typography variant="body1" mb={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. 5
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <br />
        <Card>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Div
                sx={{ position: "relative", height: 0, paddingBottom: "69.5%" }}
              >
                <CardMedia
                  component="img"
                  image={getAssetPath(
                    `${ASSET_IMAGES}/callouts/smartHome.png`,
                    "640x640"
                  )}
                  alt=""
                  sx={{
                    inset: 0,
                    height: "100%",
                    position: "absolute",
                  }}
                />
              </Div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                alignSelf: "center",
                p: 3,
                textAlign: { sm: "left", md: "right" },
                order: { md: -1 },
              }}
            >
              <Typography variant="h2" mb={2}>
                What is meant by smart home?
              </Typography>
              <Typography variant="body1" mb={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. 5
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Div
                sx={{ position: "relative", height: 0, paddingBottom: "69.5%" }}
              >
                <CardMedia
                  component="img"
                  image={getAssetPath(
                    `${ASSET_IMAGES}/callouts/smart-sensors.jpeg`,
                    "640x640"
                  )}
                  alt=""
                  sx={{
                    inset: 0,
                    height: "100%",
                    position: "absolute",
                  }}
                />
              </Div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ alignSelf: "center", p: 3 }}>
              <Typography variant="h2" mb={2}>
                What are smart sensors?
              </Typography>
              <Typography variant="body1" mb={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. 5
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Div>
    </React.Fragment>
  );
};

export default AboutUs;
