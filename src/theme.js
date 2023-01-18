import { Source_Sans_Pro, Roboto_Mono } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const fontSansSerifDefault = Source_Sans_Pro({
  weight: ['400', '600',],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const fontMonospaceDefault = Roboto_Mono({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Lucida Console', 'monospace'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: fontSansSerifDefault.style.fontFamily,
    htmlFontSize: 16,
    h5: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
    },
    h6: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
    },
    button: {
      fontWeight: 600,
    },
  },
});

export default theme;
