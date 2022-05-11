import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CmtAdvCard from '../../../@coremat/CmtAdvCard';
import CmtAdvCardContent from '../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Box } from '@material-ui/core';

const TemperatureController = () => {
  const [value, setValue] = React.useState(23);
  const temperatureMarks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 10,
      label: '10°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 30,
      label: '30°C',
    },
    {
      value: 45,
      label: '45°C',
    },
  ];

  const valuetext = value => {
    return `${value}°C`;
  };

  //   const useStyles = makeStyles(theme => ({
  //     root: {
  //       width: 460,
  //     },
  //     margin: {
  //       height: theme.spacing(2),
  //     },
  //   }));

  const useStyles = makeStyles({
    rail: {
      opacity: 0.7,
      height: 8,
      borderRadius: 20,
      background: ({ value }) => {
        const left = value < 23 ? 'lightblue' : 'gray';
        const right = value < 23 ? 'gray' : 'orange';
        return `linear-gradient(90deg, ${left} 50%, ${right} 50%)`;
      },
    },
    track: {
      height: 8,
      borderRadius: 20,
      display: 'none',
    },
  });

  //const classes = useStyles();
  const classes = useStyles({ value });
  return (
    <CmtAdvCard>
      <CmtAdvCardContent>
        <Box className={classes.root}>
          <Typography id="discrete-slider-always" gutterBottom>
            Temperature
          </Typography>
          <Slider
            onChange={(e, newValue) => setValue(newValue)}
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            value={value}
            classes={classes}
            step={1}
            max={45}
            marks={temperatureMarks}
            valueLabelDisplay="on"
          />
        </Box>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};
export default TemperatureController;
