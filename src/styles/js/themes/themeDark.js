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
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.contact-me__textfield': {
            '& fieldset': {
              border: '2px solid ' + colors['whiteOff'],
            },
            '&:hover': {
              '& .MuiFormLabel-root': {
                color: colors['blueLight'],
              },
            },
            '& .MuiFormLabel-root': {
              color: colors['whiteOff'],
              '&.Mui-focused': {
                color: colors['blueLight'],
              },
            },
            '& .MuiFormHelperText-root': {
              color: colors['whiteSemiTransparent'],
            },
            '& .MuiInputBase-input': {
              color: colors['whiteOff'],
              '&:hover': {
                color: colors['blueLight'],
                '~ fieldset': {
                  border: '2px solid ' + colors['blueLight'],
                },
              },
              '&:focus': {
                color: colors['blueLight'],
                '~ fieldset': {
                  border: '2px solid ' + colors['blueLight'],
                },
              },
            },
          },
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
