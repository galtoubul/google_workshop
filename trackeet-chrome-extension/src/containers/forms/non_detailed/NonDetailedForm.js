import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useUserInformationContext } from "../../userInformationContext";
import { SelectButton } from "../../../components/selectButton/SelectButton";
import * as React from "react";
import TextField from "@mui/material/TextField";

const NonDetailedForm = (props) => {
  const [formData, setFormData] = useState({});
  const { api } = useUserInformationContext();

  const setFormInformation = (field) => (fieldData) => {
    console.log(fieldData);
    const newFormData = {};
    newFormData[field] = fieldData;
    setFormData((oldState) => {
      return { ...oldState, ...newFormData };
    });
  };

  const sendCard = () => {
    console.log(api);
    api.addCard(formData);
  };

  const companies = [
    { title: "Amazon" },
    { title: "Ebay" },
    { title: "Asos" },
    { title: "AliExpress" },
  ];

  return (
    <>
      <SelectButton addInformation={setFormInformation("order_status")} />
      <AutocompleteInput
        label="Company"
        autocompleteList={companies}
        addInformation={setFormInformation("company_name")}
      />
      <TextInput
        label="Order Name"
        orderName={props.orderName}
        setOrderName={props.setOrderName}
        addInformation={setFormInformation("order_name")}
      />
      <TextInput
        label="Order Serial Code"
        size="small"
        addInformation={setFormInformation("order_serial_code")}
      />
      <TextField
        sx={{ margin: "2% 5%" }}
        label={"meow"}
        value={props.orderName}
        InputLabelProps={{ shrink: true }}
        onChange={(event) => {
          props.setOrderName(event.target.value);
        }}
      ></TextField>
      <DatePickerInput
        label="Estimated Arriving Date"
        addInformation={setFormInformation("date")}
      />
      <Button
        onClick={sendCard}
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
