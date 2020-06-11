import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'components/Page';

const useStyles = makeStyles((theme) => ({}));

export default function ChapterPage(props) {
  const { id } = props.match.params;
  const { labels, baseUrl, domain } = props.parameters;
  console.log(props);
  const classes = useStyles();
  const [data, setData] = useState({});

  function loadData(refreshAll = false) {
    axios
      .get(`${baseUrl}/${domain}/${id}`, {})
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
        <Grid item xs={12}>
          {labels.list.title}
        </Grid>
      </Grid>
    </Page>
  );
}
