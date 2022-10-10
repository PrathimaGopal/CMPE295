import React from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import { Box, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const TemperatureController = () => {
  const [value, setValue] = React.useState(23);
  const temperatureMarks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 10,
      label: "10°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 30,
      label: "30°C",
    },
    {
      value: 45,
      label: "45°C",
    },
  ];

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const useStyles = makeStyles({
    rail: {
      opacity: 0.7,
      height: 8,
      borderRadius: 20,
      background: ({ value }) => {
        const left = value < 23 ? "lightblue" : "gray";
        const right = value < 23 ? "gray" : "orange";
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
    <JumboCardQuick title={"Temperature Controller"}>
      <Box className={classes.root}>
        <Typography id="discrete-slider-always" gutterBottom>
          Temperature
        </Typography>
        <Slider
          onChange={(e, newValue) => setValue(newValue)}
          defaultValue={20}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          value={value}
          classes={classes}
          step={1}
          max={45}
          marks={temperatureMarks}
          valueLabelDisplay="on"
        />
      </Box>
    </JumboCardQuick>
  );
};

export default TemperatureController;
