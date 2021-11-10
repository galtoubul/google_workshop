import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import ModalForm from "../../components/forms/non_detailed/ModalForm";

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ModalForm>
        <NonDetailedForm></NonDetailedForm>
      </ModalForm>
    </LocalizationProvider>
  );
};
