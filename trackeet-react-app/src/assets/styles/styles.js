import { FONT_FAMILY } from "../fonts/font";
import { BLACK, DARK_TURQUOISE, TURQUOISE } from "../colors/colorsPalette";

export const BOARDER_RADIUS = "8px";
export const TITLE = {
  fontSize: "2rem",
  lineHeight: "1.222222223",
  letterSpacing: "0",
  margin: "16px",
  fontFamily: FONT_FAMILY,
  fontWeight: 800,
  color: BLACK,
};

export const SUB_TITLE = {
  fontSize: "1.5rem",
  lineHeight: "1.22222222223",
  letterSpacing: "0",
  margin: "4px",
  fontFamily: FONT_FAMILY,
  fontWeight: 800,
  color: BLACK,
};
export const TEXT = {
  fontSize: "1.2rem",
  lineHeight: "1.2222223",
  letterSpacing: "0",
  margin: "4px",
  fontFamily: FONT_FAMILY,
  fontWeight: 800,
  color: BLACK,
};
export const BUTTON = {
  borderRadius: BOARDER_RADIUS,
  backgroundColor: TURQUOISE,
  ":hover": {
    backgroundColor: DARK_TURQUOISE,
  },
};
