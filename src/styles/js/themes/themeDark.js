import { createTheme } from '@mui/material/styles';

import colors from '../vars/colors';
import themeBasic from './themeBasic';

// Dark theme
const themeDark = createTheme(themeBasic, {
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors['blueLight'],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: colors['blueLight'],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.contact-me__textfield': {
            '& fieldset': {
              border: '2px solid ' + colors['grayLight'],
            },
            '&:hover': {
              '& .MuiFormLabel-root': {
                color: colors['blueLight'],
              },
            },
            '& .MuiFormLabel-root': {
              color: colors['grayLight'],
              '&.Mui-focused': {
                color: colors['blueLight'],
              },
            },
            '& .MuiInputBase-input': {
              color: colors['white'],
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
      default: colors['black'],
      paper: colors['charcoal'],
    },
    primary: {
      main: colors['charcoal'],
      light: colors['grayDark'],
      dark: colors['black'],
    },
    text: {
      primary: colors['white'],
      secondary: colors['offWhite'],
    },
  },
  typography: {
    body2: {
      color: colors['offWhite'],
    },
  },
});

export default themeDark;
