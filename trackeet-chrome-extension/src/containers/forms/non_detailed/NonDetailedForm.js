import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";

const NonDetailedForm = (props) => {
  const companies = [
    { title: "Amazon" },
    { title: "Ebay" },
    { title: "Fedex" },
    { title: "Nike" },
    { title: "Asos" },
    { title: "AliExpress" },
    { title: "Apple" },
  ];

  return (
    <>
      <AutocompleteInput label="Company" autocompleteList={companies} />
      <TextInput label="Order Name" />
      <TextInput label="Order Number" />
      <DatePickerInput label="Estimated Arriving Date" />
      <Button sx={{ margin: "2% 5%" }} variant="contained">
        SAVE
      </Button>
    </>
  );
};

export default NonDetailedForm;
