import React from 'react';
import Page from 'components/Page';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(1.5),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Page>
      <Grid container spacing={3} className={classes.grid}>
        Home
      </Grid>
    </Page>
  );
}
