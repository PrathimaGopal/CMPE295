import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ResidentDashboard from './Dashboard';
import ServiceRequest from './ServiceRequest';
import Logout from './Component/Logout';
import Graph from './Component/Graph';

const Resident = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/dashboard`} />
        <Route path={`${requestedUrl}/dashboard`} component={ResidentDashboard} />
        <Route path={`${requestedUrl}/servicerequest`} component={ServiceRequest} />
        <Route path={`${requestedUrl}/graph`} component={Graph} />
        <Route path={`${requestedUrl}/logout`} component={Logout} />
      </Switch>
    </Suspense>
  );
};

export default Resident;
