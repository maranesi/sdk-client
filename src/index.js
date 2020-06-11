import React from 'react';
import ReactDOM from 'react-dom';
import Main from './features/main/index';
import RouteWrapper from './features/routeWrapper/RouteWrapper';
import { baseURL } from 'config';

const parameters = {
  baseURL,
};

ReactDOM.render(
  <Main {...parameters}>{(props) => <RouteWrapper {...props} />}</Main>,
  document.getElementById('root')
);
