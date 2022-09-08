import React from "react";
//import { useNavigate } from "react-router-dom";
import Div from "@jumbo/shared/Div";
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "../../../layouts/layouts";
import {Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";
import { CardContent } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Navbar from "../Navbar/Navbar";

const itemData = [
  {
    img: getAssetPath(
      "https://www.rent.com/blog/wp-content/uploads/2020/07/apartment_complex_hero.jpg",
      "180x180"
    ),
  },
  {
    img: getAssetPath(
      "https://butterflymx.com/wp-content/uploads/2021/07/apartment-access-control.jpg",
      "180x180"
    ),
  },
  {
    img: getAssetPath(
      "https://www.propmodo.com/wp-content/uploads/2018/12/smart-apartment-4-1155x770.jpg",
      "180x180"
    ),
  },
  {
    img: getAssetPath(
      "https://butterflymx.com/wp-content/uploads/2021/08/Smart-apartment-thermostat.jpg",
      "180x180"
    ),
  },
  {
    img: getAssetPath(
      "https://www.gensecurity.com/hubfs/Blog/Woman%20using%20video%20doorbell%20to%20speak%20to%20friend.jpg",
      "180x180"
    ),
  },
  {
    img: getAssetPath(
      "https://www.iotashome.com/wp-content/uploads/2021/03/Home_Hero_MOD2_2200-1.jpg",
      "180x180"
    ),
  },
];

const HomePage = () => {
  //const navigate = useNavigate();
  const { setActiveLayout } = useJumboApp();

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
  });

  return (
    <Div>
      <React.Fragment>
        <Navbar />
        <br />
        <Div style={{ marginRight: 6 + "em", marginLeft: 6 + "em" }}>
          <JumboCardQuick
            title={
              <Typography variant="h6" color={"text.secondary"}></Typography>
            }
            subheader={
              <Typography component={"h2"} variant="h1">
                Welcome to the first Smart Apartments in San Jose, California
              </Typography>
            }
            wrapperSx={{ pt: 0 }}
          >
            <Grid container spacing={3.75}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  sx={{ borderRadius: 2 }}
                  image={getAssetPath(
                    `${ASSET_IMAGES}/pages/cherrydeck.jpeg`,
                    "640x820"
                  )}
                  alt="About Us"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  disableRipple
                  variant="text"
                  sx={{
                    px: 0,
                    ml: "-5px",
                    mt: { md: 2 },
                    mb: 2,
                    textTransform: "none",
                    color: "text.primary",

                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <PlayCircleIcon sx={{ fontSize: "3rem", mr: 1 }} /> Watch
                  Intro
                </Button>
                <Typography variant="h2" color="text.primary">
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                  Welcome to the future! SAC apartments are the first in San
                  Jose to offer the Smart Home technology for all the
                  apartments. Our state-of-art facility provides yousecurity,
                  comfort and convenience, by our web application on your
                  smartphone or other networked device. You can control your
                  home appliances from anywhere. No more hassles in forgetting
                  whether you turned on our oven or not. We provide you peace of
                  mind, allowing them to monitor your homes remotely.
                </Typography>
              </Grid>
            </Grid>
          </JumboCardQuick>
        </Div>
      </React.Fragment>
      <br /> <br />
      <Div style={{ marginRight: 6 + "em", marginLeft: 6 + "em" }}>
      <JumboCardQuick title={"Photos"} noWrapper>
        <CardContent sx={{ py: 0 }}>
          <ImageList
            sx={{ width: "100%", m: 0, borderRadius: 2.5 }}
            cols={3}
            rowHeight={"auto"}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=120&h=120&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=120&h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CardContent>
      </JumboCardQuick>
      </Div>
    </Div>
  );
};

export default HomePage;