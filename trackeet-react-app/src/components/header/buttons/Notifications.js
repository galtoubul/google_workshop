import IconButton from "@mui/material/IconButton";
import { BiBell } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";

export const Notifications = () => {
  return (
    <IconButton>
      <BiBell color={GREY} />
    </IconButton>
  );
};
