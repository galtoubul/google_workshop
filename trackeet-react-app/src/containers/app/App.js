import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Page } from "../page/Page";
import { Header } from "../../components/header/Header";
import ThemColors from "../theme/ThemColors";
import { useState } from "react";
import { LoginPage } from "../logInPage/LoginPage";
import { useGoogleLogout } from "react-google-login";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const clientId = process.env.REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID;

  const { signOut } = useGoogleLogout({
    clientId,
  });

  const logOut = () => {
    setIsLoggedIn(false);
    signOut();
  };

  return (
    <ThemColors>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Header isLoggedIn={isLoggedIn} logOut={logOut} />
        {isLoggedIn ? <Page></Page> : <LoginPage login={login} />}
      </LocalizationProvider>
    </ThemColors>
  );
};
