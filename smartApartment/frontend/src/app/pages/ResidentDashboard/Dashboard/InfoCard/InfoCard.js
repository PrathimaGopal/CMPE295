import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Div from "@jumbo/shared/Div";
import { Switch } from "@mui/material";
import axios from "axios";
import Android12Switch from "./AndroidSwitch";

const InfoCard = (props) => {
  const [value, setValue] = useState(props.dbValue);

  const _onChange = (event) => {
    setValue(event.target.checked ? 1 : 0);
    console.log(props.deviceType, ":", event.target.checked);
    // Make API Call
    axios.defaults.headers.common = {
      "X-API-Key": "pX5ri8vYyw7B3zwQeuPuD2CXJTN1vQT967oeBqsJ",
    };

    axios({
      url: `https://oziv0d75z4.execute-api.us-west-1.amazonaws.com/Apartment1_API_gateway`,
      method: "post",
      data: {
        deviceType: props.deviceType,
        value: event.target.checked,
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

  return (
    <Card
      sx={{
        height: 115,
        backgroundImage: "linear-gradient(135deg, #E8F0FF, #95B8D1)",
      }}
    >
      <CardActions
        disableSpacing
        sx={{ p: 0, alignItems: "stretch", height: "100%" }}
      >
        <Div
          sx={{
            display: "flex",
            width: 126,
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "common.white",
            borderRadius: "50%",
            outline: "solid 10px rgba(255, 255, 255, 0.2)",
            margin: "0 10px 0 -60px",
          }}
        >
          <Div
            sx={{
              display: "flex",
              minWidth: 56,
              height: 56,
              mr: "6px",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Div>
        </Div>
        <CardContent sx={{ p: 2.5, flex: 1, alignSelf: "center" }}>
          <Typography variant={"h5"} color={"common.black"}>
            {props.title}{" "}
            <Android12Switch checked={value} onChange={_onChange} />
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
