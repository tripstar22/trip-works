import { createTheme } from '@mui/material/styles';

import {FontSansSerifDefault, FontMonospaceDefault, FontDisplayDefault} from '../fonts/fonts';
import colors from '../vars/colors';

// must initialize theme first in order to access breakpoints within theme styles
let themeDefault = createTheme();

// basic theme
themeDefault = createTheme(themeDefault, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors['teal'],
          color: colors['white'],
          fontFamily: FontSansSerifDefault.style.fontFamily,
          fontWeight: '700',
          textTransform: 'initial',
          '&:hover': {
            backgroundColor: colors['tealDark'],
          },
          '&:focus': {
            backgroundColor: colors['tealDark'],
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: colors['teal'],
          '&:hover': {
            backgroundColor: colors['tealDark'],
          },
          '&:focus': {
            backgroundColor: colors['tealDark'],
          },
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
              border: '2px solid ' + colors['white'],
            },
            '&:hover': {
              '& .MuiFormLabel-root': {
                color: colors['white'],
              },
            },
            '& .MuiFormHelperText-root': {
              color: colors['white'],
              fontFamily: FontSansSerifDefault.style.fontFamily,
            },
            '& .MuiFormLabel-root': {
              color: colors['white'],
              '&.Mui-focused': {
                color: colors['white'],
              },
            },
            '& .MuiInputBase-input': {
              color: colors['white'],
              '&:hover': {
                color: colors['white'],
                '~ fieldset': {
                  border: '2px solid ' + colors['white'],
                },
              },
              '&:focus': {
                color: colors['white'],
                '~ fieldset': {
                  border: '2px solid ' + colors['white'],
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
      default: colors['white'],
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
      fontFamily: FontSansSerifDefault.style.fontFamily,
      fontSize: 20,
      fontWeight: 700,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 22,
      },
    },
    fontFamily: FontSansSerifDefault.style.fontFamily,
    fontSize: 16,
    h1: {
      fontFamily: FontDisplayDefault,
      fontSize: 64,
      lineHeight: 1,
      [themeDefault.breakpoints.up('sm')]: {
        fontSize: 96,
      },
    },
    h2: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 40,
      fontWeight: 300,
      lineHeight: 1.1,
      paddingBottom: 20,
      [themeDefault.breakpoints.up('sm')]: {
        fontSize: 48,
      },
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 64,
        paddingBottom: 30,
      },
    },
    h3: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 36,
      fontWeight: 300,
      lineHeight: 1.1,
      paddingBottom: 20,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 40,
        lineHeight: 1.2,
        paddingBottom: 30,
      },
      [themeDefault.breakpoints.up('lg')]: {
        paddingBottom: 40,
      },
    },
    h4: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1,
      paddingBottom: 10,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 32,
        paddingBottom: 20,
      },
    },
    h5: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.3,
      paddingBottom: 20,
      [themeDefault.breakpoints.up('md')]: {
        fontSize: 24,
      },
    },
    h6: {
      fontFamily: FontMonospaceDefault.style.fontFamily,
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 1.4,
      paddingBottom: 10,
      [themeDefault.breakpoints.up('md')]: {
        paddingBottom: 20,
      },
    },
  },
});

export default themeDefault;
