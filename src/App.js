import React, { Fragment } from 'react';
import Appbar from './common/Appbar';
import Home from './pages/Home/Home';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Appbar />
        <Home />
      </Fragment>
    </ThemeProvider>
  );
}
