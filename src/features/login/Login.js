import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import axios from 'axios';
import Page from 'components/Page';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  authenticate,
  isAuthenticatedSelector,
} from 'features/stage/stageSlice';
import { baseURL } from 'config';
import { useLocalStorage } from 'hooks';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(2),
  },
  paper: {
    minWidth: 400,
    minHeight: 300,
  },
}));

export default function Login() {
  const [token, setToken] = useLocalStorage('token', null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [triggerRedirect, setTriggerRedirect] = useState(false);

  function handleSubmit() {
    axios
      .post(`${baseURL}/auth/login`, {
        username,
        password,
      })
      .then(function (response) {
        const { token } = response.data;
        setToken(token);
        dispatch(authenticate({ token }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if (isAuthenticated) {
      setTriggerRedirect(true);
    }
    return () => {};
  });

  if (token || triggerRedirect) {
    return <Redirect push to="/" />;
  }

  return (
    <Page>
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          <Box p={2}>
            <Typography variant="body1">Login</Typography>
          </Box>
          <Box p={2}>
            <TextField
              fullWidth
              label="Login"
              value={username}
              placeholder="Digite seu email ou username."
              margin="normal"
              onChange={(evt) => setUsername(evt.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Digite sua senha."
              margin="normal"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box p={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Entrar
            </Button>
          </Box>
        </Paper>
      </Box>
    </Page>
  );
}
