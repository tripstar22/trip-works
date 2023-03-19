import { createTheme } from '@mui/material/styles';

import appColors from '../vars/colors';
import themeBasic from './themeBasic';

// Light theme
const themeLight = createTheme(themeBasic, {
  themeBasic,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: appColors['black'],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: appColors['blackCharcoal'],
        },
      },
    },
  },
  palette: {
    type: 'light',
    background: {
      default: appColors['whiteOff'],
      paper: appColors['white'],
    },
    primary: {
      main: appColors['whiteOff'],
      light: appColors['whitePure'],
      dark: appColors['gray'],
    },
    text: {
      primary: appColors['black'],
      secondary: appColors['blackCharcoal'],
      disabled: appColors['blackSemiTransparent'],
      hint: appColors['whiteSemiTransparent'],
    },
  },
  typography: {
    body2: {
      color: appColors['black'],
    },
  },
});

export default themeLight;
