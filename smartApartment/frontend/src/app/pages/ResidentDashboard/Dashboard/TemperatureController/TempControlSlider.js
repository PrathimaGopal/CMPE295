import React, { useEffect, useState } from "react";
import { Box, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import axios from "axios";

const TempControlSlider = (props) => {
  const [value, setValue] = useState(props.tempValue);

  const getData = async () => {
    // Make API Call
    axios.defaults.headers.common = {
      "X-API-Key": "pX5ri8vYyw7B3zwQeuPuD2CXJTN1vQT967oeBqsJ",
    };
    const { data } = await axios.get(
      "https://wtxngldocf.execute-api.us-west-1.amazonaws.com/prod/temp"
    );

    let tempData = data?.data;

    let latestTime = null;

    tempData.forEach((temp) => {
      if (latestTime === null) {
        latestTime = temp.time;
        return setValue(temp?.payload?.temperature);
      }

      if (temp?.payload?.temperature) {
        if (new Date(temp.time) > new Date(latestTime)) {
          latestTime = temp.time;
          return setValue(temp?.payload?.temperature);
        }
      }
    });
    //console.timeLog("temperature");
  };

  useEffect(() => {
    getData();
  }, []);

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
    // Make API Call
    axios.defaults.headers.common = {
      "X-API-Key": "pX5ri8vYyw7B3zwQeuPuD2CXJTN1vQT967oeBqsJ",
    };

    axios({
      url: `https://oziv0d75z4.execute-api.us-west-1.amazonaws.com/Apartment1_API_gateway`,
      method: "post",
      data: {
        deviceType: "LivingRoomTemperature",
        value: newValue,
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
  };

  const classes = useStyles({ value });

  return (
    <Box className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom></Typography>
      <Slider
        onChange={handleChange}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        value={value?.toFixed(2)}
        classes={classes}
        step={1}
        max={45}
        marks={temperatureMarks}
        valueLabelDisplay="on"
        disabled={props.sliderEnable}
      />
    </Box>
  );
};

export default TempControlSlider;
