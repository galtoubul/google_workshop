import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";

const NonDetailedForm = (props) => {
  const companies = [
    { title: "Amazon" },
    { title: "Ebay" },
    { title: "Asos" },
    { title: "AliExpress" },
  ];

  return (
    <>
      <AutocompleteInput label="Company" autocompleteList={companies} />
      <TextInput label="Order Name" />
      <TextInput label="Order Serial Code" size="small" />
      <DatePickerInput label="Estimated Arriving Date" />
      <Button
        onClick={props.closeForm}
        sx={{ margin: "2% 5%" }}
        variant="contained"
        size={"small"}
      >
        SAVE
      </Button>
    </>
  );
};

export default NonDetailedForm;
