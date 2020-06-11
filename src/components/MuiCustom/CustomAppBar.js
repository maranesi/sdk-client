import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'features/stage/stageSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
    '& > a, & > a:visited': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
}));

function CustomAppBar(props) {
  const { handleToggle, isAuthenticated } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleLogout() {
    localStorage.removeItem('token');
    dispatch(logout());
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {isAuthenticated && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            <Link to="/">InnovationLab</Link>
          </Typography>
          {isAuthenticated && (
            <Button color="inherit" onClick={handleLogout}>
              Sair
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar;
