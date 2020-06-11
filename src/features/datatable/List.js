import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Page from 'components/Page';
import Datatable from './Datatable';
import { loadDataByParameters } from './datatableSlice';

export default function List(props) {
  const dispatch = useDispatch();
  const { parameters } = props;
  useEffect(() => {
    loadDataByParameters(dispatch, parameters);
  }, []);

  return (
    <Page>
      <Datatable title={parameters.labels.list.title} />
    </Page>
  );
}
