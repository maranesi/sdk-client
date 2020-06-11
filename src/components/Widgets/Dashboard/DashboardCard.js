import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 70,
    background: (props) => props.background,
    borderRadius: 2,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > section:last-child': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  },
  icon: {
    padding: '8px 10px',
    background: 'rgba(0,0,0,0.2)',
    color: '#FFF',
    borderRadius: 45,
    '& > svg': {
      fontSize: 40,
    },
  },
  value: {
    fontSize: '2em',
    color: '#FFF',
  },
  title: {
    fontSize: '0.8em',
    color: '#FFF',
  },
}));

export default function DashboardCard(props) {
  const { data } = props;
  const classes = useStyles({
    background: data.background || '#CCC',
  });
  return (
    <Grid item xs={3}>
      <div className={classes.card}>
        <section>
          <div className={classes.icon}>{data.icon}</div>
        </section>
        <section>
          <div className={classes.value}>{data.value}</div>
          <div className={classes.title}>{data.title}</div>
        </section>
      </div>
    </Grid>
  );
}
