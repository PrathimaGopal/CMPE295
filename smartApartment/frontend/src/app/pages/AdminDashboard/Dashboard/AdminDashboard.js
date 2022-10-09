import React from "react";
import { Grid } from "@mui/material";
import { useJumboApp } from "@jumbo/hooks";
import { LAYOUT_NAMES } from "../../../layouts/layouts";
import WordOfTheDay1 from "app/shared/widgets/WordOfTheDay1";
import EarnRewardCard from "app/shared/widgets/EarnRewardCard";
import CurrencyCalculator from "app/shared/widgets/CurrencyCalculator";

const AdminDashboard = () => {
  const { setActiveLayout } = useJumboApp();

  React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.VERTICAL_ADMIN);
  });

  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} md={6} lg={4}>
        <WordOfTheDay1 />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <EarnRewardCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <CurrencyCalculator />
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
