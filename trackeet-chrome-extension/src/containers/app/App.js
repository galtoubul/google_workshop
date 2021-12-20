import "./App.scss";
import { MainPage } from "../mainpage/MainPage";
import ThemeColors from "../../containers/theme/ThemColors";
import { Header } from "../../components/header/Header";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import SignIn from "../signIn/SignIn";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeColors>
      {/*<UserInformationProvider>*/}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} logOut={logOut} />
          {/* eslint-disable-next-line no-constant-condition */}
          {isLoggedIn ? (
            <MainPage className={"mainPage"}></MainPage>
          ) : (
            <SignIn login={login} />
          )}
        </div>
      </LocalizationProvider>
      {/*</UserInformationProvider>*/}
    </ThemeColors>
  );
};

export default App;
