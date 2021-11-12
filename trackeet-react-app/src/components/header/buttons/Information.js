import IconButton from "@mui/material/IconButton";
import { BiInfoCircle } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";

export const Information = () => {
  return (
    <IconButton>
      <BiInfoCircle color={GREY} />
    </IconButton>
  );
};
