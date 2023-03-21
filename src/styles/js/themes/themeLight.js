import { createTheme } from '@mui/material/styles';

import colors from '../vars/colors';
import themeBasic from './themeBasic';

// Light theme
const themeLight = createTheme(themeBasic, {
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors['black'],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: colors['blackCharcoal'],
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
            '& .MuiFormHelperText-root': {
              color: colors['blackSemiTransparent'],
            },
            '& .MuiInputBase-input': {
              color: colors['grayDark'],
              '&:hover': {
                color: colors['blue'],
                '~ fieldset': {
                  border: '2px solid ' + colors['blue'],
                },
              },
              '&:focus': {
                color: colors['blue'],
                '~ fieldset': {
                  border: '2px solid ' + colors['blue'],
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
      default: colors['whiteOff'],
      paper: colors['white'],
    },
    primary: {
      main: colors['whiteOff'],
      light: colors['whitePure'],
      dark: colors['gray'],
    },
    text: {
      primary: colors['black'],
      secondary: colors['blackCharcoal'],
      disabled: colors['blackSemiTransparent'],
      hint: colors['whiteSemiTransparent'],
    },
  },
  typography: {
    body2: {
      color: colors['black'],
    },
  },
});

export default themeLight;
