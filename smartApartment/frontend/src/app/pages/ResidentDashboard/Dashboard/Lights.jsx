import React, { useEffect, useState } from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import { Typography } from "@mui/material";
import { getAssetPath } from "app/utils/appHelpers";
import { ASSET_IMAGES } from "app/utils/constants/paths";
import { Switch } from "@mui/material";
import axios from "axios";

const Lights = (props) => {
  const [value, setValue] = useState(0);
  const apt = sessionStorage.getItem("apt");
  const _onChange = (event) => {
    setValue(event.target.checked ? 1 : 0);
    console.log(props.label, ":", event.target.checked);
    // Make API Call
    axios.defaults.headers.common = {
      "X-API-Key": "pX5ri8vYyw7B3zwQeuPuD2CXJTN1vQT967oeBqsJ",
    };

    axios({
      url: `https://oziv0d75z4.execute-api.us-west-1.amazonaws.com/Apartment1_API_gateway`,
      method: "post",
      data: {
        deviceType: props.deviceType,
        value: event.target.checked ? 1 : 0,
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

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://wtxngldocf.execute-api.us-west-1.amazonaws.com/prod/${props.label.toLowerCase()}?apt=${apt}`
      );
      console.log("Lights Data for ", props.label.toLowerCase(), "is ", data);
      if (props.label === "Living" || props.label === "Bathroom") {
        setValue(data?.data[0]?.payload?.light === 1 ? true : false);
      } else {
        setValue(data?.data[0]?.Value === 1 ? true : false);
      }
    };
    fetchData();
  }, []);

  return (
    <JumboCardQuick bgColor={props.color}>
      <Div sx={{ display: "flex", alignItems: "center" }}>
        <img
          alt={"Properties Icon"}
          src={getAssetPath(
            `${ASSET_IMAGES}/dashboard/projectIcon.svg`,
            "46x46"
          )}
        />
        <Div sx={{ ml: 2, flex: 1 }}>
          <Typography color={"common.white"} variant={"h5"} mb={0.5}>
            {props.label}
            <Switch
              checked={value}
              onChange={_onChange}
              defaultChecked
              color="warning"
            />
          </Typography>
        </Div>
      </Div>
    </JumboCardQuick>
  );
};

export default Lights;
