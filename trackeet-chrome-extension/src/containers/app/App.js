import "./App.scss";
import ThemeColors from "../../containers/theme/ThemColors";
import { Header } from "../../components/header/Header";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import * as React from "react";
import { UserInformationProvider } from "../userInformationContext";
import { AppRoute } from "../appRoute";
// import { Footer } from "../../components/footer/Footer";

const App = () => {
  return (
    <ThemeColors>
      <UserInformationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="App">
            <Header />
            {/* eslint-disable-next-line no-constant-condition */}
            <AppRoute />
            {/*<Footer></Footer>*/}
          </div>
        </LocalizationProvider>
      </UserInformationProvider>
    </ThemeColors>
  );
};

export default App;
