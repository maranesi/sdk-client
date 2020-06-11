import React, { useEffect } from 'react';
import { Stage } from '../stage/Stage';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#424242',
      main: '#212121',
      dark: '#010101',
      contrastText: '#fff',
    },
    secondary: {
      light: '#66bb6a',
      main: '#43a047',
      dark: '#2e7d32',
      contrastText: '#000',
    },
  },
});

function App(props) {
  const { baseURL } = props;
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    axios
      .post(`${baseURL}/auth/check/token`, { token })
      .then(() => {})
      .catch(() => {
        localStorage.removeItem('token');
      });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Stage {...props} />
      </ThemeProvider>
    </div>
  );
}

export default App;
