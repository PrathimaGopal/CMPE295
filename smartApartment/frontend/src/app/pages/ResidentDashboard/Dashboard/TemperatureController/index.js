import React, { useEffect, useState } from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import { Box, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import axios from "axios";

const TemperatureController = () => {
  const [value, setValue] = useState(23);

  useEffect(() => {
    // Make API Call
    axios.defaults.headers.common = {
      "X-API-Key": "pX5ri8vYyw7B3zwQeuPuD2CXJTN1vQT967oeBqsJ",
    };

    axios({
      url: `https://oziv0d75z4.execute-api.us-west-1.amazonaws.com/Apartment1_API_gateway`,
      method: "post",
      data: {
        deviceType: "LivingRoomTemperature",
        value: value,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Success", res.data);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  });

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles({ value });

  return (
    <JumboCardQuick title={"Temperature Controller"}>
      <Box className={classes.root}>
        <Typography id="discrete-slider-always" gutterBottom></Typography>
        <Slider
          onChange={handleChange}
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
