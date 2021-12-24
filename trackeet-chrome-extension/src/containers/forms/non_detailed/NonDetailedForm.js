/* eslint-disable no-var */
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { useUserInformationContext } from "../../userInformationContext";
import { SelectButton } from "../../../components/selectButton/SelectButton";
import * as React from "react";

const NonDetailedForm = (props) => {
  const { api } = useUserInformationContext();
  const { setFormInformation, formData } = props;

  const {
    estimated_arrival_date,
    order_status,
    company,
    order_name,
    order_serial_code,
  } = formData;
  console.log("shay!!!!!!!!");
  console.log({
    estimated_arrival_date,
    order_status,
    company,
    order_name,
    order_serial_code,
  });

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
      <SelectButton
        value={order_status}
        setValue={setFormInformation("order_status")}
      />
      <AutocompleteInput
        label="Company"
        autocompleteList={companies}
        value={company}
        setValue={setFormInformation("company")}
      />
      <AutocompleteInput
        label="Order Name"
        autocompleteList={[]}
        value={order_name}
        setValue={setFormInformation("order_name")}
      />
      <AutocompleteInput
        label="Order Serial Code"
        autocompleteList={[]}
        value={order_serial_code}
        setValue={setFormInformation("order_serial_code")}
      />
      <DatePickerInput
        label="Estimated Arriving Date"
        value={estimated_arrival_date}
        setValue={setFormInformation("estimated_arrival_date")}
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
