import "./App.css";
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
          <MainPage></MainPage>
        </div>
      </LocalizationProvider>
    </ThemeColors>
  );
};

export default App;
