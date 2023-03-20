import { createTheme } from '@mui/material/styles';

import colors from '../vars/colors';
import themeBasic from './themeBasic';

// Dark theme
const themeDark = createTheme(themeBasic, {
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors['white'],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: colors['whiteOff'],
        },
      },
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: colors['blackCharcoal'],
      paper: colors['black'],
    },
    primary: {
      main: colors['blackCharcoal'],
      light: colors['black'],
      dark: colors['blackPure'],
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
      color: colors['white'],
    },
  },
});

export default themeDark;
