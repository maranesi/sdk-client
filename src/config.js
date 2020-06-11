import React from 'react';
import Person from '@material-ui/icons/Person';
import Home from '@material-ui/icons/Home';

export const baseURL = 'http://localhost:3333';

export const menu = [
  { name: 'Home', link: '/', icon: <Home /> },
  { name: 'Colaboradores', link: '/employees', icon: <Person /> },
];

export const domains = ['employees'];
