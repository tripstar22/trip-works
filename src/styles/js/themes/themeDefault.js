import { createTheme } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts/fonts';
import colors from '../vars/colors';
import gradients from '../vars/gradients';

// must initialize theme first in order to access breakpoints within theme styles
let themeDefault = createTheme();

// basic theme
themeDefault = createTheme(themeDefault, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: gradients['gradientDefault'],
          color: colors['white'],
          fontFamily: FontSansSerifDefault.style.fontFamily,
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
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors['teal'],
          '&:hover': {
            color: colors['tealDark'],
          },
          '&:focus': {
            color: colors['tealDark'],
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: colors['teal'],
          '&:hover': {
            fill: colors['tealDark'],
          },
          '&:focus': {
            fill: colors['tealDark'],
          },
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
                color: colors['teal'],
              },
            },
            '& .MuiFormHelperText-root': {
              color: colors['grayDark'],
              fontFamily: FontSansSerifDefault.style.fontFamily,
            },
            '& .MuiFormLabel-root': {
              color: colors['grayDark'],
              '&.Mui-focused': {
                color: colors['teal'],
              },
            },
            '& .MuiInputBase-input': {
              color: colors['black'],
              '&:hover': {
                color: colors['tealDark'],
                '~ fieldset': {
                  border: '2px solid ' + colors['tealDark'],
                },
              },
              '&:focus': {
                color: colors['tealDark'],
                '~ fieldset': {
                  border: '2px solid ' + colors['tealDark'],
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
    divider: colors['gray'],
    error: {
      main: colors['red'],
    },
    primary: {
      main: colors['offWhite'],
      light: colors['white'],
      dark: colors['grayLight'],
    },
    secondary: {
      main: colors['teal'],
      light: colors['tealLight'],
      dark: colors['tealDark'],
      contrastText: colors['teal'],
    },
    success: {
      main: colors['green'],
    },
    text: {
      disabled: colors['gray'],
      hint: colors['grayDark'],
      primary: colors['charcoal'],
      secondary: colors['grayDark'],
    },
  },
  typography: {
    body1: {
      fontFamily: FontSansSerifDefault.style.fontFamily,
      fontSize: 16,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 18,
      },
    },
    body2: {
      color: colors['charcoal'],
      fontFamily: FontSansSerifDefault.style.fontFamily,
      fontSize: 14,
      textDecoration: 'underline',
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
    fontFamily: FontSansSerifDefault.style.fontFamily,
    fontSize: 16,
    h1: {
      fontFamily: FontDisplayDefault,
      fontSize: 64,
      [themeDefault.breakpoints.up('sm')]: {
        fontSize: 96,
      },
    },
    h2: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 40,
      fontWeight: 300,
      [themeDefault.breakpoints.up('sm')]: {
        fontSize: 48,
      },
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 64,
      },
    },
    h3: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 32,
      fontWeight: 300,
      paddingBottom: 10,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 40,
        paddingBottom: 20,
      },
      [themeDefault.breakpoints.up('lg')]: {
        paddingBottom: 30,
      },
    },
    h4: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 24,
      fontWeight: 300,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 32,
      },
    },
    h5: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 20,
      fontWeight: 300,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 24,
      },
    },
    h6: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 18,
      fontWeight: 300,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
  },
});

export default themeDefault;
