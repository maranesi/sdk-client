import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../login/Login';

function getComponent(isAuthenticated, props, route) {
  return (props) =>
    isAuthenticated ? (
      <route.component {...props} {...route.attributes} />
    ) : (
      <Redirect to="/login" />
    );
}

export default function Router(props) {
  const { isAuthenticated, routes, home } = props;
  return (
    <Switch>
      <Route path="/login" render={(props) => <Login {...props} />} />
      {routes.map((route, i) => (
        <Route
          key={`route-${i}`}
          path={route.path}
          render={getComponent(isAuthenticated, props, route)}
        />
      ))}
      <Route path="/" render={home} />
    </Switch>
  );
}
