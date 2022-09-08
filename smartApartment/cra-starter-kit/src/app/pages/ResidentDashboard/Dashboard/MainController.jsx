import React from "react";
import {
  MeetingRoomRounded,
  KitchenRounded,
  WbSunnyRounded,
  FireplaceRounded,
} from "@mui/icons-material";
import InfoCard from "./InfoCard/InfoCard";

const MainController = (props) => {
  const getIcon = () => {
    if (props.icon === "door") {
      return <MeetingRoomRounded style={{ color: "#ffffff" }} />;
    } else if (props.icon === "kitchen") {
      return <KitchenRounded style={{ color: "#ffffff" }} />;
    } else if (props.icon === "light") {
      return <WbSunnyRounded style={{ color: "#ffffff" }} />;
    } else if (props.icon === "fire") {
      return <FireplaceRounded style={{ color: "#ffffff" }} />;
    }
  };
  return <InfoCard icon={getIcon()} title={props.title} image={props.image}/>;
};

export default MainController;
