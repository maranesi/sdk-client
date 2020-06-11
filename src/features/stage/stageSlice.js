import { createSlice } from '@reduxjs/toolkit';

export const stageSlice = createSlice({
  name: 'stage',
  initialState: {
    token: null,
    isAuthenticated: !!localStorage.getItem('token'),
    visible: {
      menu: false,
    },
  },
  reducers: {
    showMenu: (state) => {
      state.visible.menu = true;
    },
    hideMenu: (state) => {
      state.visible.menu = false;
    },
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { showMenu, hideMenu, authenticate, logout } = stageSlice.actions;

// Complex Actions
export const toggleMenu = (dispatch, value) => {
  if (!!value) {
    dispatch(showMenu());
  } else {
    dispatch(hideMenu());
  }
};

// Selectors
export const menuVisibleSelector = (state) => {
  return state.stage.visible.menu;
};

export const isAuthenticatedSelector = (state) => {
  return state.stage.isAuthenticated;
};

export default stageSlice.reducer;
