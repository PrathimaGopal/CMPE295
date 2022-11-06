import React from "react";
import CardHeader from "@mui/material/CardHeader";
import { Card } from "@mui/material";
import ReactPlayer from "react-player";

const Camera = (props) => {

  return (
    <Card>
      <CardHeader title={props.name} />
      <div style={{ display: "fixed" }}>
        <div style={{ paddingLeft: "10px" }}>
          <ReactPlayer
            width="98%"
            height="120%"
            url={props.label}
          />
          <br /> 
        </div>
      </div>
    </Card>
  );
};

export default Camera;
