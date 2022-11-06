import React, { useEffect, useState } from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import { Typography } from "@mui/material";
import { Switch } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import axios from "axios";

const PublicUtility = (props) => {
  const [value, setValue] = useState(0);

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
    <JumboCardQuick bgColor={props.color}>
      <Div sx={{ display: "flex", alignItems: "center" }}>
        <ApartmentIcon fontSize="large" />
        <Div sx={{ ml: 2, flex: 1 }}>
          <Typography color={"common.black"} variant={"h3"} mb={0.5}>
            {props.label}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Switch checked={value} onChange={_onChange} />
          </Typography>
        </Div>
      </Div>
    </JumboCardQuick>
  );
};

export default PublicUtility;
