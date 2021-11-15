import "./App.scss";
import { MainPage } from "../mainpage/MainPage";
import ThemeColors from "../../containers/theme/ThemColors";
import { Header } from "../../components/header/Header";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const App = () => {
  return (
    <ThemeColors>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <Header></Header>
          <MainPage className={"mainPage"}></MainPage>
        </div>
      </LocalizationProvider>
    </ThemeColors>
  );
};

export default App;
