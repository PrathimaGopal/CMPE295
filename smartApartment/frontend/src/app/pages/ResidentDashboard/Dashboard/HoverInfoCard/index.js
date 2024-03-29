import React from "react";
import { Card, Box } from "@mui/material";
import CountUp from "react-countup";
import { Switch } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardRoot: {
    position: "relative",
    paddingLeft: 95,
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      boxShadow:
        "0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)",
      "& $iconThumb": {
        width: 95,
        height: "100%",
        borderRadius: 0,
      },
      "& $hoverContent": {
        transform: "translate(-10px, -50%)",
      },
    },
  },
  cardContent: {
    padding: 20,
  },
  iconWrapper: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    width: 95,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconThumb: {
    width: 56,
    height: 56,
    transition: "all 0.3s ease",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hoverContent: {
    position: "absolute",
    top: "50%",
    right: 0,
    zIndex: 1,
    padding: 10,
    transform: "translate(100%, -50%)",
    transition: "all 0.3s ease",
  },
}));

const HoverInfoCard = ({
  backgroundColor,
  icon,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  counterProps,
  linkOnArrow,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card {...rest} className={classes.cardRoot} >
      <Box className={classes.iconWrapper}>
        <Box className={classes.iconThumb} style={{ backgroundColor }}>
          {icon}
        </Box>
      </Box>
      <Box className={classes.cardContent}>
        <Box
          component="h4"
          fontSize={{ xs: 18, md: 18, xl: 18 }}
          fontWeight="fontWeightBold"
          {...titleProps}
        >
          {typeof title === "number" ? (
            <CountUp
              start={0}
              end={title}
              useEasing={false}
              {...counterProps}
            />
          ) : (
            title
          )}
        </Box>
        <Box
          component="span"
          fontSize={16}
          fontWeight="fontWeightBold"
          color="text.secondary"
          {...subTitleProps}
        >
          {subTitle}
        </Box>
      </Box>
      <Box className={classes.hoverContent}>
        <Switch />
      </Box>
    </Card>
  );
};

export default HoverInfoCard;
