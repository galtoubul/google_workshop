import { TURQUOISE, GREY } from "../../../assets/colors/colorsPalette";
import { BOARDER_RADIUS } from "../../../assets/styles/styles";

export const getPhoneStyle = (width) => {
  return {
    width: `${0.8 * width}px`,
    height: "100%",
    maxWidth: "300px",
  };
};

export const boardStyle = {
  width: 400,
  backgroundColor: GREY,
  overflow: "visible",
  borderWidth: "4px",
  borderStyle: "solid",
  borderColor: TURQUOISE,
  borderRadius: BOARDER_RADIUS,
};
