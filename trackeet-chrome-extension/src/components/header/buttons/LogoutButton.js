import IconButton from "@mui/material/IconButton";
import { BiLogOut } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";

export const LogoutButton = (props) => {
  return (
    <IconButton onClick={props.logOut}>
      <BiLogOut color={GREY} />
    </IconButton>
  );
};
