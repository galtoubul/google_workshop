import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Header } from "../../components/header/Header";
import ThemColors from "../theme/ThemColors";
// import { useGoogleLogout } from "react-google-login";
import { UserInformationProvider } from "../../utlis/hooks/userInformationContext/userInformationContext";
import { AppRoute } from "../appRoute";
// import { initMock } from "../../utlis/api/utils/mock";

export const App = () => {
  // const { signOut } = useGoogleLogout({
  //   clientId,
  // });

  return (
    <ThemColors>
      <UserInformationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Header />
          {/* eslint-disable-next-line no-constant-condition */}
          <AppRoute />
        </LocalizationProvider>
      </UserInformationProvider>
    </ThemColors>
  );
};
