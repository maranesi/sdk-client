import React from 'react';
import './main.css';
import App from 'features/app/App';
import store from 'store';
import { Provider } from 'react-redux';

function Main(props) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App {...props} />
      </Provider>
    </React.StrictMode>
  );
}

export default Main;
