import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterList from '@material-ui/icons/FilterList';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColumnBox, visibleColumnBoxSelector } from './datatableSlice';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

function DatatableToolbar(props) {
  const classes = useToolbarStyles();
  const dispatch = useDispatch();
  const { title, numSelected } = props;
  const visibleColumnBox = useSelector(visibleColumnBoxSelector);

  function handleToggleColumnBox() {
    dispatch(toggleColumnBox());
  }

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" component="div">
          {title}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip title="Filter list">
            <IconButton
              aria-label="filter list"
              onClick={handleToggleColumnBox}
              color={visibleColumnBox ? 'secondary' : 'default'}
            >
              <ViewColumn />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
}

DatatableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string,
};

export default DatatableToolbar;
