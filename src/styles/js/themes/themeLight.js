import { createTheme } from '@mui/material/styles';

import colors from '../vars/colors';
import themeBasic from './themeBasic';

// Light theme
const themeLight = createTheme(themeBasic, {
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors['blueDark'],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: colors['blueDark'],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.contact-me__textfield': {
            '& fieldset': {
              border: '2px solid ' + colors['grayDark'],
            },
            '&:hover': {
              '& .MuiFormLabel-root': {
                color: colors['blue'],
              },
            },
            '& .MuiFormLabel-root': {
              color: colors['grayDark'],
              '&.Mui-focused': {
                color: colors['blue'],
              },
            },
            '& .MuiInputBase-input': {
              color: colors['black'],
              '&:hover': {
                color: colors['blueDark'],
                '~ fieldset': {
                  border: '2px solid ' + colors['blueDark'],
                },
              },
              '&:focus': {
                color: colors['blueDark'],
                '~ fieldset': {
                  border: '2px solid ' + colors['blueDark'],
                },
              },
            },
          },
        },
      },
    },
  },
  palette: {
    type: 'light',
    background: {
      default: colors['offWhite'],
      paper: colors['white'],
    },
    primary: {
      main: colors['offWhite'],
      light: colors['white'],
      dark: colors['grayLight'],
    },
    text: {
      primary: colors['charcoal'],
      secondary: colors['grayDark'],
    },
  },
  typography: {
    body2: {
      color: colors['charcoal'],
    },
  },
});

export default themeLight;
