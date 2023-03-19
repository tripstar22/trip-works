import { createTheme } from '@mui/material/styles';

import appColors from '../vars/colors';
import themeBasic from './themeBasic';

// Dark theme
const themeDark = createTheme(themeBasic, {
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: appColors['white'],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: appColors['whiteOff'],
        },
      },
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: appColors['blackCharcoal'],
      paper: appColors['black'],
    },
    primary: {
      main: appColors['blackCharcoal'],
      light: appColors['black'],
      dark: appColors['blackPure'],
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
      color: appColors['white'],
    },
  },
});

export default themeDark;
