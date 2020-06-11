import React from 'react';
import Router from 'features/router/Router';
import { getListRoutes } from 'features/router/lists';
import { getRegistrationRoutes } from 'features/router/registrations';
import Home from '../home/Home';
import { domains } from 'config';

const configs = domains.map((domain) => {
  const config = require(`domains/${domain}`);
  return config.default;
});

const registrationRoutes = getRegistrationRoutes(configs);
const listRoutes = getListRoutes(configs);
const routes = [...registrationRoutes, ...listRoutes];

export default function RouteWrapper(props) {
  const home = (props) => <Home {...props} />;
  return <Router {...props} routes={routes} home={home} />;
}
