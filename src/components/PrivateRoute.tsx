/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isSignedIn } from '../utils/auth';

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isSignedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
