import React from "react";
import MainController from "./MainController";
import { Grid } from "@mui/material";
import SecurityCamera from "./SecurityCamera";
import Lights from "./Lights";
import TemperatureController from "./TemperatureController";
import SalesOverview from "app/shared/metrics/SalesOverview";
import TempHumidityGraph from "./TempHumidityGraph";
import HumidityController from "./HumidityController";
// import TemperatureAnalytics from "./TemperatureAnalytics";

export default function ResidentDashboard() {
  return (
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
        <SalesOverview />
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
          dbValue={0}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Lights
          icon="bathroom"
          label="Bathroom"
          deviceType="BathroomLight"
          color="#144e7a"
          dbValue={0}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TemperatureController />
      </Grid>
      <Grid item xs={12} lg={6}>
        <HumidityController />
      </Grid>
      <Grid item xs={12} lg={12}>
        <TempHumidityGraph />
      </Grid>
    </Grid>
  );
}
