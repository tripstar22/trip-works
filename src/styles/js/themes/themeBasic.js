import { createTheme } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts';
import appColors from '../vars/colors';

// Basic theme
const themeBasic = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: appColors['blue'],
          color: appColors['white'],
          fontWeight: '700',
          textTransform: 'initial',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: appColors['blue'],
        },
      },
    },
  },
  palette: {
    divider: appColors['grayDark'],
    error: {
      main: appColors['red'],
    },
    secondary: {
      main: appColors['blue'],
      light: appColors['blueLight'],
      dark: appColors['blueDark'],
      contrastText: appColors['white'],
    },
    success: {
      main: appColors['green'],
    },
    text: {
      primary: appColors['white'],
      secondary: appColors['whiteOff'],
      disabled: appColors['whiteSemiTransparent'],
      hint: appColors['blackSemiTransparent'],
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
