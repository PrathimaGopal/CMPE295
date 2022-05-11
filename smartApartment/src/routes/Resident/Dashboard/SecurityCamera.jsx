import React from 'react';
import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import ReactPlayer from 'react-player';
import CmtCard from '@coremat/CmtCard';

const SecurityCamera = () => {
  return (
    <CmtCard style={{ height: '100%' }}>
      <CmtCardHeader title="Security Camera" />
      <div style={{ display: 'flex' }}>
        <div style={{ paddingLeft: '65px' }}>
          <ReactPlayer controls width="100%" height="100%" url="https://www.youtube.com/watch?v=4i_GFrlaStQ" />
        </div>
      </div>
    </CmtCard>
  );
};

export default SecurityCamera;
