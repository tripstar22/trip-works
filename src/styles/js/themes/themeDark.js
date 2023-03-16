import { createTheme } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts/fonts';

// Create theme instance
const themeLight = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#303030',
      paper: '#212121',
    },
    divider: '#9e9e9e',
    error: {
      main: '#c62828',
    },
    primary: {
      main: '#303030',
      light: '#212121',
      dark: '#aaaaaa',
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
      primary: '#f5f5f5',
      secondary: '#d5d5d5',
      disabled: 'rgba(245,245,245,0.4)',
      hint: '#e0e0e0',
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
