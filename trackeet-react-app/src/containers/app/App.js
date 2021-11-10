import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Page } from "../page/Page";

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Page></Page>
    </LocalizationProvider>
  );
};
