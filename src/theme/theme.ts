import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d3bb8a",
    },
    secondary: {
      main: "#323c4b",
    },
    text: {
      primary: "#f3f5f8",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
