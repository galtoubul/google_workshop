import IconButton from "@mui/material/IconButton";
import { BiLogIn } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";

export const Login = (props) => {
  return (
    <IconButton>
      <BiLogIn onClick={props.logOut} color={GREY} />
    </IconButton>
  );
};
