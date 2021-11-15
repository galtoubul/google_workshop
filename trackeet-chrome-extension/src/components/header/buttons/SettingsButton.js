import IconButton from "@mui/material/IconButton";
import { BiCog } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";

export const SettingsButton = () => {
  return (
    <IconButton>
      <BiCog color={GREY} />
    </IconButton>
  );
};
