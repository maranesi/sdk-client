import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Settings from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from './Table';

const useStyles = makeStyles((theme) => ({
  paper: {},
}));

export default function TableWidget(props) {
  const classes = useStyles();
  const { rows, title, subtitle } = props;
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="baseline">
              <Box flexGrow={1} p={2}>
                <Typography variant="body1">{title}</Typography>
                <Typography variant="caption">{subtitle}</Typography>
              </Box>
              <Box p={1}>
                <IconButton aria-label="settings">
                  <Settings />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Table rows={rows} indexName="product" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
