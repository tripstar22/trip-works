import { createTheme } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts';

// Create theme instance
const themeLight = createTheme({
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: '#1565C0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#1565C0',
          color: '#f5f5f5',
          fontWeight: '700',
          textTransform: 'initial',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: '#1565C0',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#212121',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#303030',
        },
      },
    },
  },
  palette: {
    type: 'light',
    background: {
      default: '#eeeeee',
      paper: '#f5f5f5',
    },
    divider: '#9e9e9e',
    error: {
      main: '#c62828',
    },
    primary: {
      main: '#eeeeee',
      light: '#ffffff',
      dark: '#bdbdbd',
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
      primary: '#212121',
      secondary: '#303030',
      disabled: 'rgba(33,33,33,0.6)',
      hint: 'rgba(238,238,238,0.6)',
    },
  },
  typography: {
    body2: {
      color: '#212121',
      textDecoration: 'underline',
    },
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
  },
});

export default themeLight;
