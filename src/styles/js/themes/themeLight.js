import { createTheme } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts/fonts';

// Create theme instance
const themeLight = createTheme({
  palette: {
    type: 'light',
    background: {
      default: '#eeeeee',
      paper: '#fafafa',
    },
    divider: '#bdbdbd',
    error: {
      main: '#c62828',
    },
    primary: {
      main: '#eeeeee',
      light: '#fafafa',
      dark: '#bdbdbd',
    },
    secondary: {
      main: '#1565c0',
      light: '#1e88e5',
      dark: '#0d47a1',
      contrastText: '#f5f5f5',
    },
    success: {
      main: '#2e7d32',
    },
    text: {
      primary: '#212121',
      secondary: '#303030',
      disabled: 'rgba(33,33,33,0.4)',
      hint: '#616161',
    },
  },
  typography: {
    fontFamily: FontSansSerifDefault.style.fontFamily,
    fontSize: 16,
    h1: {
      fontFamily: FontDisplayDefault,
    },
    h2: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h3: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h4: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h5: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h6: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    button: {
      fontWeight: 700,
    },
  },
});

export default themeLight;
