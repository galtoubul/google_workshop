import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { useState } from "react";

const NonDetailedForm = () => {
  const [orderName, setName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const orderNameChange = (event) => {
    setName(event.target.value);
  };

  const orderNumberChange = (event) => {
    setOrderNumber(event.target.value);
  };

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
    <form className={"nonDetailedFormContainer"}>
      <div className={"nonDetailedFormHeader"}>
        <h1>New Order</h1>
      </div>
      <div className={"nonDetailedFormInputFields"}>
        <AutocompleteInput label="Company" autocompleteList={companies} />
        <TextInput
          label="Order Name"
          onChange={orderNameChange}
          value={orderName}
        />
        <TextInput
          label="Order Number"
          onChange={orderNumberChange}
          value={orderNumber}
        />
        <DatePickerInput label="Estimated Arriving Date" />
      </div>
      <div className="nonDetailedFormButtons">
        <Button sx={{ backgroundColor: 11111 }} variant="contained">
          SAVE
        </Button>
        <Button variant="contained">ADVANCED</Button>
      </div>
    </form>
  );
};

export default NonDetailedForm;
