import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Logout from './Component/AdminComponent';
import AdminComponent from './Component/AdminComponent';
import ServiceRequestAdmin from './Component/ServiceRequestAdmin';

const AdminDashboard = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense>
      <Switch>
        <Route path={`${requestedUrl}/dashboard`} component={AdminComponent} />
        <Route path={`${requestedUrl}/servicerequest`} component={ServiceRequestAdmin} />
        <Route path={`${requestedUrl}/logout`} component={Logout} />
      </Switch>
    </Suspense>
  );
};

export default AdminDashboard;
