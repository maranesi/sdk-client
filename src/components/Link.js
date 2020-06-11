import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link as DefaultLink } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#666 !important',
  },
  linkUnderlined: {
    textDecoration: 'underline',
  },
});

export default function Link(props) {
  const classes = useStyles();
  const { underlined = true } = props;
  return (
    <DefaultLink
      className={clsx(classes.link, underlined && classes.linkUnderlined)}
      {...props}
    >
      {props.children}
    </DefaultLink>
  );
}
