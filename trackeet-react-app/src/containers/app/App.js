import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DetailedForm from "../forms/detailed/DetailedForm";
import ModalForm from "../../components/forms/non_detailed/ModalForm";

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ModalForm>
        <DetailedForm></DetailedForm>
      </ModalForm>
    </LocalizationProvider>
  );
};
