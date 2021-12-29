import IconButton from "@mui/material/IconButton";
import { BiLogIn } from "react-icons/bi";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";

export const Login = (props) => {
  const { logOut } = useUserInformationContext();

  return (
    <IconButton>
      <BiLogIn onClick={logOut} />
    </IconButton>
  );
};
