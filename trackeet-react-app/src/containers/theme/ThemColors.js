import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BLACK,
  DARK_TURQUOISE,
  TURQUOISE,
  GREY,
} from "../../assets/colors/colorsPalette";
import { FONT_FAMILY, FONT_WEIGHT } from "../../assets/fonts/font";

export const theme = createTheme({
  spacing: 10,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: FONT_WEIGHT,
          fontSize: "1rem",
        },
      },
    },
  },
  palette: {
    primary: {
      light: GREY,
      main: TURQUOISE,
      dark: DARK_TURQUOISE,
      contrastText: BLACK,
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
  },
});

export default function ThemColors(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
