import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import EmployeeAside from 'features/employees/EmployeeAside';
import EmployeeContent from 'features/employees/EmployeeContent';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'components/Page';

const useStyles = makeStyles((theme) => ({
  header: {
    background:
      'url(https://cdn.pixabay.com/photo/2017/08/12/14/56/background-2634508_1280.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    height: 300,
  },
}));

export default function EmployeePage(props) {
  const { parameters, match } = props;
  const { id } = match.params;
  const classes = useStyles();
  const [data, setData] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
    role: '',
  });

  function loadData(refreshAll = false) {
    axios
      .get(`http://localhost:3333/employees/${id}`, {})
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    loadData(false);
  }, []);

  return (
    <Page>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.header} />
        <EmployeeAside data={data} />
        <Grid item xs={9}>
          <EmployeeContent data={data} sections={parameters.sections} />
        </Grid>
      </Grid>
    </Page>
  );
}
