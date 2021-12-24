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

export const theme = createTheme({
  spacing: 10,
  components: {
    textTransform: "capitalize",
    MuiButton: {
      textTransform: "capitalize",
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
    fontWeight: 900,
    textTransform: "none",
  },
});

export default function ThemColors(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
