import IconButton from "@mui/material/IconButton";
import { BiLogIn } from "react-icons/bi";
import { GREY } from "../../../assets/colors/colorsPalette";
import { useGoogleLogout } from "react-google-login";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";
import { CLIENT_ID } from "../../../containers/logInPage/LoginModal/logInModal";

export const Login = (props) => {
  const { setLogOutState } = useUserInformationContext();
  const onLogoutSuccess = () => {
    setLogOutState();
  };

  const onFailure = () => {
    console.log("failed to logout");
  };

  const { signOut } = useGoogleLogout({
    clientId: CLIENT_ID,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <IconButton>
      <BiLogIn
        onClick={() => {
          signOut();
        }}
        color={GREY}
      />
    </IconButton>
  );
};
