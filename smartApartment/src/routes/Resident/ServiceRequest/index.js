import React from 'react';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import GridContainer from '../../../@jumbo/components/GridContainer';
import RequestItem from './RequestItem';
import { Grid } from '@material-ui/core';

export default function ResidentServiceRequest() {
  return (
    <PageContainer heading="Resident Service Request">
      <GridContainer>
        <Grid item xs={6} sm={6} md={3}></Grid>
        <Grid item xs={8} sm={6} md={6}>
          <RequestItem />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
}
