import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtCard from '../../../@coremat/CmtCard';
import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import SummaryTabs from './TemperatureAnalyticTabs';
import TemperatureGraph from './TemperatureGraph';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    '@media screen and (min-width: 1280px) and (max-width: 1368px)': {
      '& .Cmt-header-root': {
        flexDirection: 'column',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .Cmt-header-root': {
        flexDirection: 'column',
      },
    },
  },
  titleRoot: {
    marginBottom: 4,
  },
  titlePrimary: {
    color: theme.palette.primary.main,
  },
  subTitle: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
}));

const TemperatureAnalytics = () => {
  const [tabValue, setTabValue] = useState(0);
  const [graph, setGraph] = useState('Temperature Graph');
  const classes = useStyles();

  useEffect(() => {
    if (tabValue === 0) {
      setGraph('Temperature Graph');
    } else {
      setGraph('Humidity Graph');
    }
  }, [tabValue]);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title={graph}>
        <SummaryTabs tabValue={tabValue} setTabValue={setTabValue} />
      </CmtCardHeader>
      <TemperatureGraph value={tabValue} />
    </CmtCard>
  );
};

export default TemperatureAnalytics;
