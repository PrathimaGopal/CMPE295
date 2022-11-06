import React from "react";
import { Grid } from "@mui/material";
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "../../../layouts/layouts";
import PublicUtility from "./PublicUtility";
import Camera from "./Camera";

const AdminDashboard = () => {
  const { setActiveLayout } = useJumboApp();

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.VERTICAL_ADMIN);
  });

  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={4}>
        <PublicUtility
          label="Lights"
          deviceType="CommunityLights"
          color="#f2ceae"
          dbValue={0}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <PublicUtility
          label="Locker room"
          deviceType="LockerRoom"
          color="#f2ceae"
          dbValue={0}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <PublicUtility
          label="Leasing Office"
          deviceType="LeasingOfficeLock"
          color="#f2ceae"
          dbValue={0}
        />
      </Grid>
      <Grid item lg={6} style={{ maxHeight: "200%", width: "50%" }}>
        <Camera
          name="Parking Lot Camera 1"
          deviceType="ParkingLotCamera1"
          label="https://www.youtube.com/watch?v=c38K8IsYnB0"
        />
      </Grid>
      <Grid item lg={6} style={{ maxHeight: "200%", width: "50%" }}>
        <Camera
          name="Parking Lot Camera 2"
          deviceType="ParkingLotCamera2"
          label="https://www.youtube.com/watch?v=c38K8IsYnB0"
        />
      </Grid>{" "}
      <Grid item lg={6} style={{ maxHeight: "200%", width: "50%" }}>
        <Camera
          name="Pool Camera"
          deviceType="PoolCamera"
          label="https://www.youtube.com/watch?v=PECtY03xwSo"
        />
      </Grid>{" "}
      <Grid item lg={6} style={{ maxHeight: "200%", width: "50%" }}>
        <Camera
          name="Leasing Office Camera"
          deviceType="LeasingOfficeCamera"
          label="https://www.youtube.com/watch?v=4i_GFrlaStQ"
        />
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
