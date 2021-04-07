import React, { Fragment } from 'react';
import Appbar from './common/Appbar';
import Home from './pages/Home/Home';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Home2 from './pages/Home/Home2';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Appbar />
        <Home />
        {/* <Home2 /> */}
      </Fragment>
    </ThemeProvider>
  );
}
