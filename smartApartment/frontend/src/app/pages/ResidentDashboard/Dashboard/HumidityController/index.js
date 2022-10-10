import React from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import { Box, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const HumidityController = () => {
   const [value, setValue] = React.useState(80);
   const humidityMarks = [
     {
       value: 0,
       label: "0%",
     },
     {
       value: 25,
       label: "25%",
     },
     {
       value: 50,
       label: "50%",
     },
     {
       value: 75,
       label: "75%",
     },
     {
       value: 100,
       label: "100%",
     },
   ];

   const valuetext = (value) => {
     return `${value}%`;
   };

   const useStyles = makeStyles({
     rail: {
       opacity: 0.7,
       height: 8,
       borderRadius: 20,
       background: ({ value }) => {
         const left = value < 50 ? "red" : "gray";
         const right = value < 50 ? "gray" : "blue";
         return `linear-gradient(90deg, ${left} 50%, ${right} 50%)`;
       },
     },
     track: {
       height: 8,
       borderRadius: 20,
       display: "none",
     },
   });

  const classes = useStyles({ value });

  return (
    <JumboCardQuick title={"Humidity Controller"}>
      <Box className={classes.root}>
        <Typography id="discrete-slider-always" gutterBottom>
          Humidity
        </Typography>
        <Slider
          onChange={(e, newValue) => setValue(newValue)}
          defaultValue={80}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          classes={classes}
          step={5}
          marks={humidityMarks}
          valueLabelDisplay="on"
        />
      </Box>
    </JumboCardQuick>
  );
};

export default HumidityController;
