import { configureStore } from '@reduxjs/toolkit';
import stageReducer from './features/stage/stageSlice';
import datatableSlice from './features/datatable/datatableSlice';

export default configureStore({
  reducer: {
    stage: stageReducer,
    datatable: datatableSlice,
  },
});
