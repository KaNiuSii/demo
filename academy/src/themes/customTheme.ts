import { createTheme } from "@mui/material/styles";
import {
  grey,
  cyan,
  red,
  yellow,
  green,
  pink,
  lime,
  lightBlue,
} from "@mui/material/colors";

export const customTheme = createTheme({
  typography: {
    fontFamily: "Ubuntu Sans Mono, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: green["A400"],
      contrastText: "#000000",
    },
    secondary: {
      main: green["A400"],
      contrastText: "#000000",
    },
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: grey[200],
      secondary: green["A400"],
      disabled: grey[500],
    },
    error: {
      main: red[600],
    },
    warning: {
      main: yellow[500],
    },
    info: {
      main: cyan[200],
    },
    success: {
      main: green["A400"],
    },
    action: {
      active: grey[300],
      hover: grey[500],
      selected: grey[600],
      disabled: grey[700],
      disabledBackground: grey[800],
    },
  },
});
