import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import { formatReal } from '../helpers';

const StyledTableCell = withStyles(() => ({
  body: {
    fontSize: 14,
    border: 'none',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    border: 'none',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    width: '100%',
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    color: '#666',
  },
  table: {
    border: 'none',
    width: '100%',
    boxShadow: 'none',
  },
  th: {
    width: 150,
    color: '#212121',
  },
}));

export default function Information(props) {
  const classes = useStyles();
  const { section, data } = props;

  function formatValue(fieldType, value) {
    switch (fieldType) {
      case 'real':
        return formatReal(value);
      default:
        return value;
    }
  }
  return (
    <div className={classes.root}>
      {section.map((section) => (
        <>
          <Typography variant="subtitle2" className={classes.title}>
            {section.label}
          </Typography>
          <Table className={classes.table} aria-label="customized table">
            <TableBody>
              {section.fields.map((row) => (
                <StyledTableRow key={row.label}>
                  <StyledTableCell
                    className={classes.th}
                    component="th"
                    scope="row"
                  >
                    {row.label}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {formatValue(row.type, data[row.field])}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ))}
    </div>
  );
}
