import React from "react";
import MainController from "./MainController";
import { Grid } from "@mui/material";
import SecurityCamera from "./SecurityCamera";
import GridContainer from "./GridContainer";
import Lights from "./Lights";
import TemperatureController from "./TemperatureController";
// import TemperatureController from "./TemperatureController";
// import HumidityController from "./HumidityController";
// import TemperatureAnalytics from "./TemperatureAnalytics";

export default function ResidentDashboard() {
  return (
    <Grid container>
      <GridContainer>
        <Grid item xs={12} md={12} xl={6}>
          <SecurityCamera />
        </Grid>
        <Grid item xs={10} md={12} xl={6}>
          <GridContainer>
            <Grid item xs={12} sm={6}>
              <MainController icon="door" title="Front Door" color="#4DB2F5" />
              <br />
              <MainController icon="kitchen" title="Fridge" color="#7ECC7E" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MainController icon="light" title="Oven" color="#FFA74F" />
              <br />
              <MainController icon="fire" title="Stove" color="#D16472" />
            </Grid>
          </GridContainer>
        </Grid>
      </GridContainer>

      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6} lg={3}>
          <Lights icon="living" label="Living" color="#4DB2F5" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Lights icon="bed" label="Bedroom" color="#7ECC7E" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Lights icon="kitchen" label="Kitchen" color="#FFA74F" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Lights icon="bathroom" label="Bathroom" color="#D16472" />
        </Grid>
      </Grid>

      <br />
      
      <Grid item xs={12} md={6}>
        <TemperatureController />
      </Grid>
      {/* <br /> <br />
        <Grid item xs={12} xl={8}>
          <GridContainer>
            <Grid item xs={12} sm={2} md={3}>
              <Lights icon="living" label="Living" color="#4DB2F5" />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
              <Lights icon="bed" label="Bedroom" color="#7ECC7E" />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
              <Lights icon="kitchen" label="Kitchen" color="#FFA74F" />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
              <Lights icon="bathroom" label="Bathroom" color="#D16472" />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item xs={12} xl={8}>
          <GridContainer>
            <Grid item xs={12} lg={6}>
              <TemperatureController />
            </Grid>
            <Grid item xs={12} lg={6}>
              <HumidityController />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item xs={12} xl={12}>
          <GridContainer>
            <Grid item xs={12} lg={12}>
              <TemperatureAnalytics />
            </Grid>
          </GridContainer>
        </Grid> */}
    </Grid>
  );
}
