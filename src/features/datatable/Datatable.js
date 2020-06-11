import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DatatableToolbar from './DatatableToolbar';
import DatatableHead from './DatatableHead';
import ColumnsManager from './ColumnsManager';
import { useSelector } from 'react-redux';
import Link from 'components/Link';
import { headSelector, rowsSelector } from './datatableSlice';
import { formatReal } from '../../helpers';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  columnsManager: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  datatable: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  boxList: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 200,
    flexWrap: 'wrap',
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const { title } = props;
  const rows = useSelector(rowsSelector);
  const head = useSelector(headSelector);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  function renderChild(item, row) {
    switch (item.type) {
      case 'link':
        return <Link to={`${item.baseUrl}/${row.id}`}>{row[item.id]}</Link>;
      case 'real':
        return formatReal(row[item.id]);
      case 'avatar':
        return (
          <Link to={`${item.nested.domain}/${row[item.nested.ref]}`}>
            <Tooltip title={row[item.nested.tooltip]}>
              <Avatar src={row[item.id]} />
            </Tooltip>
          </Link>
        );
      case 'list':
        return (
          <Box className={classes.boxList}>
            {row[item.id].map((subItem) => (
              <Link to={`${item.nested.domain}/${subItem[item.nested.ref]}`}>
                <Tooltip title={subItem[item.nested.tooltip]}>
                  <Avatar src={subItem[item.nested.id]} />
                </Tooltip>
              </Link>
            ))}
          </Box>
        );
      default:
        return row[item.id];
    }
  }

  return (
    <>
      <Paper className={classes.columnsManager}>
        <ColumnsManager />
      </Paper>
      <Paper className={classes.datatable}>
        <DatatableToolbar title={title} numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
          >
            <DatatableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  return (
                    <TableRow
                      hover
                      //onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      {/*
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />

                    </TableCell>
                    */}
                      {head.map((item, key) => {
                        return (
                          <TableCell
                            key={`cell-${item.id}-${key}`}
                            component="td"
                            scope="row"
                            padding="default"
                            align={item.align}
                          >
                            {renderChild(item, row)}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {rows.length >= 25 && (
          <TablePagination
            rowsPerPageOptions={[25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </>
  );
}
