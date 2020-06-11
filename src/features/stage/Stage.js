import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CustomAppBar from 'components/MuiCustom/CustomAppBar';
import CustomDrawer from 'components/MuiCustom/CustomDrawer';
import { menu } from 'config';
import {
  toggleMenu,
  menuVisibleSelector,
  isAuthenticatedSelector,
} from './stageSlice';

export function Stage(props) {
  const { children } = props;
  const visible = useSelector(menuVisibleSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();
  const handleToggle = () => toggleMenu(dispatch, !visible);
  return (
    <BrowserRouter>
      <CustomAppBar
        handleToggle={handleToggle}
        isAuthenticated={isAuthenticated}
      />
      {isAuthenticatedSelector && (
        <CustomDrawer
          visible={visible}
          handleToggle={handleToggle}
          menu={menu}
        />
      )}
      {children({
        isAuthenticated: isAuthenticated,
      })}
    </BrowserRouter>
  );
}
