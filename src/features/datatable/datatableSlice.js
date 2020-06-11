import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const datatableSlice = createSlice({
  name: 'datatable',
  initialState: {
    visible: {
      columnBox: false,
    },
    head: [],
    rows: [],
    config: [],
  },
  reducers: {
    setDataWithInitialColumns: (state, action) => {
      const { rows, config, initialColumns } = action.payload;
      state.rows = rows;
      state.head = config.filter((item) => initialColumns.includes(item.id));
      state.config = config.sort((a, b) => {
        if (a.label > b.label) return 1;
        if (a.label < b.label) return -1;
        return 0;
      });
    },
    setRows: (state, action) => {
      state.rows = action.payload.rows;
    },
    addColumn: (state, action) => {
      state.head = [
        ...state.head,
        state.config.find((item) => item.id === action.payload.id),
      ];
    },
    removeColumn: (state, action) => {
      state.head = state.head.filter((item) => item.id !== action.payload.id);
    },
    toggleColumnBox: (state) => {
      state.visible.columnBox = !state.visible.columnBox;
    },
  },
});

export const {
  setRows,
  setDataWithInitialColumns,
  addColumn,
  removeColumn,
  toggleColumnBox,
} = datatableSlice.actions;

// Selectors
export const rowsSelector = (state) => {
  return state.datatable.rows;
};

export const headSelector = (state) => {
  return state.datatable.head;
};

export const configSelector = (state) => {
  return state.datatable.config;
};

export const visibleColumnBoxSelector = (state) => {
  return state.datatable.visible.columnBox;
};

export function loadDataByParameters(dispatch, parameters, refreshAll = false) {
  const { domain, config, initialColumns } = parameters;
  loadData(dispatch, domain, config, initialColumns, refreshAll);
}

// Custom actions
export function loadData(
  dispatch,
  domain,
  config,
  initialColumns,
  refreshAll = false
) {
  axios
    .get(`http://localhost:3333/${domain}`, {})
    .then(function (response) {
      if (refreshAll) {
        dispatch(setRows({ rows: response.data }));
      } else {
        dispatch(
          setDataWithInitialColumns({
            rows: response.data,
            initialColumns: initialColumns,
            config,
          })
        );
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default datatableSlice.reducer;
