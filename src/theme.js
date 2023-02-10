import { PT_Serif, Roboto_Mono } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Define Local Font
export const fontDisplayDefault = "Hudson-NY-Serif";
// Import Google Fonts
export const fontSerifDefault = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Times New Roman", "Garamond", "serif"],
});
export const fontMonospaceDefault = Roboto_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Lucida Console", "monospace"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: fontSerifDefault.style.fontFamily,
    htmlFontSize: 16,
    h1: {
      fontFamily: fontDisplayDefault,
    },
    h2: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
    },
    h3: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
    },
    h4: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
    },
    h5: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
    },
    h6: {
      fontFamily: fontMonospaceDefault.style.fontFamily,
    },
    // button: {
    //   fontWeight: 600,
    // },
  },
});

export default theme;
