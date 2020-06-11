import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import {
  headSelector,
  configSelector,
  visibleColumnBoxSelector,
  addColumn,
  removeColumn,
} from './datatableSlice';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const visible = useSelector(visibleColumnBoxSelector);
  const classes = useStyles();
  const dispatch = useDispatch();
  const head = useSelector(headSelector);
  const config = useSelector(configSelector);

  if (!visible) {
    return null;
  }

  function handleChange(item) {
    const check = !head.find((column) => item.id === column.id);
    const payload = { id: item.id };
    if (check) {
      dispatch(addColumn(payload));
    } else {
      dispatch(removeColumn(payload));
    }
  }

  return (
    <>
      <Toolbar className={clsx(classes.root)}>
        <Typography
          color="inherit"
          className={classes.title}
          variant="h6"
          component="div"
        >
          Colunas
        </Typography>
      </Toolbar>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <Grid container spacing={0}>
            {config.map((item) => {
              return (
                <Grid item xs={3}>
                  <FormControlLabel
                    label={item.label}
                    control={
                      <Checkbox
                        checked={!!head.find((column) => item.id === column.id)}
                        onChange={() => handleChange(item)}
                        name={head.id}
                      />
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </FormGroup>
      </FormControl>
    </>
  );
}
