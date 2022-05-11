import { GREY } from "../../assets/colors/colorsPalette";

export const getBoardStyle = (isIpad, isLoggedIn, width) => {
  return {
    display: !isIpad && "flex",
    alignItems: !isIpad && "stretch",
    justifyContent: !isIpad && "center",
    marginLeft: isIpad && "12px",
    backgroundColor: GREY,
    height: "100%",
    width: isIpad && !isLoggedIn && width,
  };
};
