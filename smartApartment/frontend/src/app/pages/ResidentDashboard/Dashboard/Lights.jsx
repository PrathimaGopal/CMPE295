import React, { useEffect, useState } from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import { Typography } from "@mui/material";
import { getAssetPath } from "app/utils/appHelpers";
import { ASSET_IMAGES } from "app/utils/constants/paths";
import { Switch } from "@mui/material";
import axios from "axios";

const Lights = (props) => {
  const [value, setValue] = useState(props.dbValue);

  const _onChange = (event) => {
    setValue(event.target.checked ? 1 : 0);
    console.log(props.label, ":", event.target.checked);
  };

  const getData = async() => {
    const {data} = await axios.get(`https://wtxngldocf.execute-api.us-west-1.amazonaws.com/prod/${props.label.toLowerCase()}`);

    const payload = data?.data?.payload;

    if(props.label === "Bedroom"){
      const bedroomLight = data?.data?.filter((data) => data.DEVICE_TYPE === "BEDROOM_LIGHT")[0];
      return setValue(bedroomLight?.DeviceAvailable > 0 ? true: false);
    }

    setValue(payload?.light === 1 ? true: false);
  }

  useEffect(() => {
    getData();
  }, [props.label]);

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
            {props.label} &nbsp;
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
