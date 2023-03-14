import { Source_Sans_Pro, Roboto_Mono } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Define Local Font
export const fontDisplayDefault = 'Hudson-NY-Serif';
// Import Google Fonts
export const fontSansSerifDefault = Source_Sans_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Times New Roman', 'Garamond', 'serif'],
});
export const fontMonospaceDefault = Roboto_Mono({
  weight: ['300', '400'],
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
    text: {
      primary: '#333',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: fontSansSerifDefault.style.fontFamily,
    htmlFontSize: 16,
    h1: {
      fontFamily: fontDisplayDefault,
    },
    h2: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h3: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h4: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h5: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    h6: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
      fontWeight: 300,
    },
    button: {
      fontWeight: 700,
    },
  },
});

export default theme;
