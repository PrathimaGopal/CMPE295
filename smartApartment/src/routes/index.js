import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import SamplePage from './Pages/SamplePage';
import HomePage from './Pages/HomePage';
import Error404 from './Pages/404';
import Login from './Auth/Login';
import ForgotPasswordPage from './Auth/ForgotPassword';
import Resident from './Resident';
import AdminDashboard from './AdminDashboard';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  // const { authUser } = useSelector(({ auth }) => auth);
  // const location = useLocation();

  // if (location.pathname === '' || location.pathname === '/') {
  //   return <Redirect to={'/sample-page'} />;
  // } else if (authUser && location.pathname === '/signin') {
  //   return <Redirect to={'/sample-page'} />;
  // }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/sample-page" component={SamplePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/faq" component={SamplePage} />
        <Route path="/signin" component={Login} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <RestrictedRoute path="/resident" component={Resident} />
        <RestrictedRoute path="/admin" component={AdminDashboard} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
