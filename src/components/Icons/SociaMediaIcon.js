import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1),
    cursor: 'pointer',
  },
}));

export default function EmployeeAside(props) {
  const classes = useStyles();
  const { width = 35, src, to } = props;
  return (
    <a href={to} className={classes.link}>
      <img width={width} src={src} />
    </a>
  );
}
