import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      light: 'rgba(89, 210, 188, 1)',
      main: '#674293',
    },
    pbr: {
      primary: '#C80C81',
      secondary: '#C80C81',
      textPrimary: '#ffffff',
      textSecondary: '#1e1e1e',
      textLight: '#212121',
      textDark: '#e5e5e5',
    },
  },
  typography: {
    fontFamily: [
      'Work Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
export default theme;
