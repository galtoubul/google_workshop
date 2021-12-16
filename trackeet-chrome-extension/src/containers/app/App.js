import "./App.scss";
import { MainPage } from "../mainpage/MainPage";
import ThemeColors from "../../containers/theme/ThemColors";
import { Header } from "../../components/header/Header";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Login from "../loginPage/Login";

const App = () => {
  return (
    <ThemeColors>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <Header />
          {/* eslint-disable-next-line no-constant-condition */}
          {0 === 1 ? <MainPage className={"mainPage"}></MainPage> : <Login />}
        </div>
      </LocalizationProvider>
    </ThemeColors>
  );
};

export default App;
