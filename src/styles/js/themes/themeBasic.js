import { createTheme } from '@mui/material/styles';
import { darken } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts';
import colors from '../vars/colors';
import gradients from '../vars/gradients';

// Basic theme
const themeBasic = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: gradients['gradientDefault'],
          color: colors['white'],
          fontWeight: '700',
          textTransform: 'initial',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: gradients['gradientDefault'],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.contact-me__textfield': {
            '& .MuiFormHelperText-root': {
              color: colors['gray'],
            },
          },
        },
      },
    }, 
  },
  palette: {
    divider: colors['gray'],
    error: {
      main: colors['red'],
    },
    secondary: {
      main: colors['blue'],
      light: colors['blueLight'],
      dark: colors['blueDark'],
      contrastText: colors['blue'],
    },
    success: {
      main: colors['green'],
    },
    text: {
      disabled: colors['gray'],
      hint: colors['grayDark'],
    },
  },
  typography: {
    body2: {
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

export default themeBasic;
