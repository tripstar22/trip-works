import { createTheme } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts';

// Create theme instance
const themeDark = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#1565C0',
          color: '#f5f5f5',
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#f5f5f5',
        }
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#eeeeee',
        },
      },
    },
  },
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
      dark: '#000000',
    },
    secondary: {
      main: '#1565C0',
      light: '#448aff',
      dark: '#0d47a1',
      contrastText: '#f5f5f5',
    },
    success: {
      main: '#2e7d32',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#eeeeee',
      disabled: 'rgba(245,245,245,0.6)',
      hint: 'rgba(48,48,48,0.6)',
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

export default themeDark;
