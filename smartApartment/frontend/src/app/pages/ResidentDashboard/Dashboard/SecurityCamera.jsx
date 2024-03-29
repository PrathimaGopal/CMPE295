import React from "react";
import CardHeader from "@mui/material/CardHeader";
import { Card } from "@mui/material";
import ReactPlayer from "react-player";


const SecurityCamera = () => {
  return (
    <Card>
      <CardHeader title={"Security Camera"} />
      <div style={{ display: "flex" }}>
        <div style={{ paddingLeft: "80px" }}>
          <ReactPlayer
            width="120%"
            height="80%"
            url="https://www.youtube.com/watch?v=4i_GFrlaStQ"
          />
          <br /> <br />
        </div>
      </div>
    </Card>
  );
};

export default SecurityCamera;
