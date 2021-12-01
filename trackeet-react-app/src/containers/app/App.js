import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Page } from "../page/Page";
import { Header } from "../../components/header/Header";
import ThemColors from "../theme/ThemColors";
import { LoginPage } from "../logInPage/LoginPage";
import { useState } from "react";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
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
