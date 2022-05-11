import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CmtAdvCard from '../../../@coremat/CmtAdvCard';
// import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Box } from '@material-ui/core';

const HumidityController = () => {
  const [value, setValue] = React.useState(80);
  const humidityMarks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  const valuetext = value => {
    return `${value}%`;
  };

  const useStyles = makeStyles({
    rail: {
      opacity: 0.7,
      height: 8,
      borderRadius: 20,
      background: ({ value }) => {
        const left = value < 50 ? 'red' : 'gray';
        const right = value < 50 ? 'gray' : 'blue';
        return `linear-gradient(90deg, ${left} 50%, ${right} 50%)`;
      },
    },
    track: {
      height: 8,
      borderRadius: 20,
      display: 'none',
    },
  });

  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     width: 460,
  //   },
  //   margin: {
  //     height: theme.spacing(2),
  //   },
  // }));

  const classes = useStyles({ value });

  return (
    <CmtAdvCard>
      <CmtAdvCardContent>
        <Box className={classes.root}>
          <Typography id="discrete-slider-always" gutterBottom>
            Humidity
          </Typography>
          <Slider
            onChange={(e, newValue) => setValue(newValue)}
            defaultValue={80}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            classes={classes}
            step={5}
            marks={humidityMarks}
            valueLabelDisplay="on"
          />
        </Box>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default HumidityController;
