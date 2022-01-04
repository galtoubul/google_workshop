import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BLACK,
  DARK_TURQUOISE,
  TURQUOISE,
  GREY,
  WHITE,
} from "../../assets/colors/colorsPalette";
import { FONT_FAMILY, FONT_WEIGHT } from "../../assets/fonts/font";
import { BOARDER_RADIUS } from "../../assets/styles/styles";
import { CssBaseline } from "@material-ui/core";

export const theme = createTheme({
  spacing: 10,
  components: {
    fontWeight: FONT_WEIGHT,
    fontFamily: [FONT_FAMILY].join(","),
    textTransform: "capitalize",
    MuiButton: {
      styleOverrides: {
        textTransform: "capitalize",
        root: {
          textTransform: "capitalize",
          fontWeight: FONT_WEIGHT,
          fontSize: "1rem",
          borderRadius: BOARDER_RADIUS,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        textTransform: "capitalize",
        root: {
          textTransform: "capitalize",
          fontWeight: FONT_WEIGHT,
          fontSize: "1rem",
          borderRadius: BOARDER_RADIUS,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        textTransform: "capitalize",
        root: {
          textTransform: "capitalize",
          fontWeight: FONT_WEIGHT,
          fontSize: "1rem",
          borderRadius: BOARDER_RADIUS,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        textTransform: "capitalize",
        root: {
          textTransform: "capitalize",
          fontWeight: FONT_WEIGHT,
          fontSize: "1rem",
          borderRadius: BOARDER_RADIUS,
        },
      },
    },
  },
  palette: {
    primary: {
      light: GREY,
      main: TURQUOISE,
      dark: DARK_TURQUOISE,
      contrastText: WHITE,
    },
    secondary: {
      light: GREY,
      main: DARK_TURQUOISE,
      dark: BLACK,
      contrastText: BLACK,
    },
  },
  typography: {
    fontFamily: [FONT_FAMILY].join(","),
    fontWeight: FONT_WEIGHT,
  },
});

export default function ThemColors(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
