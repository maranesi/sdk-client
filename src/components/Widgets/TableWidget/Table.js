import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableMui from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    border: 'none',
  },
  firstTr: {
    borderBottom: '1px solid #CCC',
  },
  tr: {
    borderBottom: '1px solid #f0f0f0',
  },
  td: {
    border: 'none',
    color: '#666',
  },
});

export default function Table(props) {
  const classes = useStyles();
  const { rows } = props;
  return (
    <TableMui
      dense
      size="small"
      className={classes.table}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow className={classes.firstTr}>
          <TableCell>Product</TableCell>
          <TableCell align="right">Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} className={classes.tr}>
            <TableCell component="th" scope="row" className={classes.td}>
              {row.name}
            </TableCell>
            <TableCell align="right" className={classes.td}>
              {row.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableMui>
  );
}
