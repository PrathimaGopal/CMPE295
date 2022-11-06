import React, { useEffect, useState } from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import TempControlSlider from "./TempControlSlider";
import { Switch, Typography } from "@mui/material";
import axios from "axios";

const TemperatureController = (props) => {
    const [value, setValue] = useState(props.dbValue);
    const _onChange = (event) => {
        setValue(event.target.checked ? 1 : 0);
        console.log(props.label, ":", event.target.checked);
    };

    useEffect(() => {
      // Make API Call
      axios.defaults.headers.common = {
        "X-API-Key": "pX5ri8vYyw7B3zwQeuPuD2CXJTN1vQT967oeBqsJ",
      };

      axios({
        url: `https://oziv0d75z4.execute-api.us-west-1.amazonaws.com/Apartment1_API_gateway`,
        method: "post",
        data: {
          deviceType: props.deviceType,
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
    }, [props.label, value]);

    return (
      <JumboCardQuick>
        <Typography variant="h4" align="center">
          TemperatureController &nbsp;&nbsp;
          <Switch checked={value} onChange={_onChange} defaultChecked />
        </Typography>
        <br />
        <TempControlSlider sliderEnable={value === 1? false: true} tempValue={props.tempValue}/>
      </JumboCardQuick>
    );

}

export default TemperatureController;