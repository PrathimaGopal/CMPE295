import React from 'react';
// import { WbSunnyRounded } from '@material-ui/icons';
import CounterCard from '../../../@jumbo/components/Common/CounterCard';

const Lights = props => {
  //   const getIcon = () => {
  //     return <WbSunnyRounded />;
  //   };
  return (
    <CounterCard
      icon="/images/dashboard/projectIcon.svg"
      label={props.label}
      labelProps={{
        fontSize: 16,
        color: 'black',
      }}
      number=""
      backgroundColor={props.color}
      gradientDirection="180deg"
    />
  );
};

export default Lights;
