import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    background: (props) => props.background,
    marginTop: 64,
    minHeight: 'calc(100vh - 64px)',
    overflow: 'auto',
  },
}));

export default function Page(props) {
  const classes = useStyles({
    background: props.background || '#f0f0f0',
  });
  return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={1}
      className={classes.page}
    >
      <Grid item xs={12} style={{ padding: '8px 24px' }}>
        {props.children}
      </Grid>
    </Grid>
  );
}
