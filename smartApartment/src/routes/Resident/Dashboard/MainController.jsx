import React from 'react';
import { MeetingRoomRounded, KitchenRounded, WbSunnyRounded, FireplaceRounded } from '@material-ui/icons';
import HoverInfoCard from '../../../@jumbo/components/Common/HoverInfoCard';

const MainController = props => {
  const getIcon = () => {
    if (props.icon === 'door') {
      return <MeetingRoomRounded style={{ color: '#ffffff' }} />;
    } else if (props.icon === 'kitchen') {
      return <KitchenRounded style={{ color: '#ffffff' }} />;
    } else if (props.icon === 'light') {
      return <WbSunnyRounded style={{ color: '#ffffff' }} />;
    } else if (props.icon === 'fire') {
      return <FireplaceRounded style={{ color: '#ffffff' }} />;
    }
  };
  return <HoverInfoCard icon={getIcon()} backgroundColor={props.color} title={props.title} subTitle={props.subTitle} />;
};

export default MainController;
