import IconButton from "@mui/material/IconButton";
import { BiLogIn } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";

export const Login = (props) => {
  const { logOut } = useUserInformationContext();

  return (
    <IconButton>
      <BiLogIn onClick={logOut} color={GREY} />
    </IconButton>
  );
};
