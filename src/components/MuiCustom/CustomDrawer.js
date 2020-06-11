import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '../Link';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function CustomDrawer(props) {
  const classes = useStyles();
  const { menu, visible, handleToggle } = props;

  const toggleDrawer = (e) => {
    if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    handleToggle();
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={visible}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {menu.map((item, index) => (
            <Link to={item.link} underlined={false}>
              <ListItem button key={`${item.name}-${index}`}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
}
