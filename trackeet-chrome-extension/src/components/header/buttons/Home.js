import IconButton from "@mui/material/IconButton";
import { BiHome } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";

export const Home = () => {
  return (
    <IconButton>
      <BiHome color={GREY} />
    </IconButton>
  );
};
