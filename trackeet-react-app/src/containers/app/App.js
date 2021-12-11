import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Page } from "../page/Page";
import { Header } from "../../components/header/Header";
import ThemColors from "../theme/ThemColors";
import { useState, useEffect } from "react";
import { LoginPage } from "../logInPage/LoginPage";
import { useGoogleLogout } from "react-google-login";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientId, setClientId] = useState("");

  const login = () => {
    setIsLoggedIn(true);
  };

  const { signOut } = useGoogleLogout({
    clientId,
  });

  const logOut = () => {
    setIsLoggedIn(false);
    signOut();
  };

  useEffect(() => {
    fetch("/api/client_id")
      .then((res) => res.json())
      .then((data) => {
        setClientId(data.clientId);
      });
  }, []);

  return (
    <ThemColors>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Header isLoggedIn={isLoggedIn} logOut={logOut} />
        {isLoggedIn ? (
          <Page></Page>
        ) : (
          <LoginPage clientId={clientId} login={login} />
        )}
      </LocalizationProvider>
    </ThemColors>
  );
};
