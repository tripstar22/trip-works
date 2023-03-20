import { createTheme } from '@mui/material/styles';
import { darken } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts';
import colors from '../vars/colors';

// Basic theme
const themeBasic = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors['blue'],
          color: colors['white'],
          fontWeight: '700',
          outline: '2px solid transparent',
          outlineOffset: '3px',
          textTransform: 'initial',
          '&:hover': {
            backgroundColor: darken(colors['blueDark'], 0.1),
          },
          '&:focus': {
            backgroundColor: darken(colors['blueDark'], 0.1),
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: colors['blue'],
        },
      },
    },
  },
  palette: {
    divider: colors['grayDark'],
    error: {
      main: colors['red'],
    },
    secondary: {
      main: colors['blue'],
      light: colors['blueLight'],
      dark: colors['blueDark'],
      contrastText: colors['white'],
    },
    success: {
      main: colors['green'],
    },
    text: {
      primary: colors['white'],
      secondary: colors['whiteOff'],
      disabled: colors['whiteSemiTransparent'],
      hint: colors['blackSemiTransparent'],
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
