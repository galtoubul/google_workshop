import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.css";
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
    <form className="non-detailed-form-container">
      <div className="non-detailed-form-header">
        <h1>New Order</h1>
      </div>
      <div className="non-detailed-form-input-fields">
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
      <div className="non-detailed-form-buttons">
        <Button variant="contained">SAVE</Button>
        <Button variant="contained">ADVANCED</Button>
      </div>
    </form>
  );
};

export default NonDetailedForm;
