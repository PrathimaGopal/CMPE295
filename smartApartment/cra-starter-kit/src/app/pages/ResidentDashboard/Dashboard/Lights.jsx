import React from "react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import { Typography } from "@mui/material";
import { getAssetPath } from "app/utils/appHelpers";
import { ASSET_IMAGES } from "app/utils/constants/paths";
import { Switch } from "@mui/material";

const Lights = (props) => {
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
          <Typography color={"common.white"} variant={"h3"} mb={0.5}>
            {props.label} &nbsp;
              <Switch />
          </Typography>
        </Div>
      </Div>
    </JumboCardQuick>
  );
};

export default Lights;

