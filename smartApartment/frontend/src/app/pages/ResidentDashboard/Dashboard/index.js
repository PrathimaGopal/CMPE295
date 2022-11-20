import React from "react";
import MainController from "./MainController";
import { Grid } from "@mui/material";
import SecurityCamera from "./SecurityCamera";
import Lights from "./Lights";
import TemperatureController from "./TemperatureController";
import TempHumidityGraph from "./TempHumidityGraph";
import TempTimeGraph from "./TempratureTimeGraph";
import HumidityController from "./HumidityController";
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "../../../layouts/layouts";

export default function ResidentDashboard() {
  const { setActiveLayout } = useJumboApp();
  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.VERTICAL_DEFAULT);
  });
  const cssStyle = () => ({
    paddingTop: `28px`,
    paddingBottom: `28px`,
    paddingLeft: `30px`,
    paddingRight: `30px`,
  });
  return (
    <div class="CmtLayout-content" style={cssStyle()}>
      <Grid container spacing={3.75}>
        <Grid item xs={12} lg={3}>
          <Grid container spacing={3.75}>
            <Grid item xs={12} sm={6} lg={12}>
              <MainController
                icon="door"
                title="Front Door"
                deviceType="FrontDoor"
                image="linear-gradient(135deg, #38B8F2, #843CF6)"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              <MainController
                icon="kitchen"
                title="Fridge"
                deviceType="KitchenFridge"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Grid container spacing={3.75}>
            <Grid item xs={12} sm={6} lg={12}>
              <MainController
                icon="light"
                title="Oven"
                deviceType="KitchenOven"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              <MainController
                icon="fire"
                title="Stove"
                deviceType="KitchenBurner"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SecurityCamera />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Lights
            icon="living"
            label="Living"
            deviceType="LivingRoomLight"
            color="#144e7a"
            dbValue={0}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Lights
            icon="bed"
            label="Bedroom"
            deviceType="BedroomLight"
            color="#144e7a"
            dbValue={0}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Lights
            icon="kitchen"
            label="Kitchen"
            deviceType="KitchenLight"
            color="#144e7a"
            dbValue={1}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Lights
            icon="bathroom"
            label="Bathroom"
            deviceType="BathroomLight"
            color="#144e7a"
            dbValue={1}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TemperatureController
            dbValue={1}
            deviceType="TemperatureController"
            label="TemperatureController"
            tempValue={32}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <HumidityController
            dbValue={1}
            deviceType="HumidityController"
            label="TemperatureController"
            humidityValue={92}
          />
        </Grid>
        {/* <Grid item xs={12} lg={12}>
          <TempHumidityGraph />
        </Grid> */}
        <Grid item xs={12} lg={12}>
          <TempTimeGraph />
        </Grid>
      </Grid>
    </div>
  );
}