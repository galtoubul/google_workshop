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
  const { setFormInformation, formData, resetForm } = props;

  const saveAction = async () => {
    props.setIsSendLoading(true);
    try {
      await api.addCard(formData);
      props.setIsSendFinish(true);
      props.setIsSendError(false);
      props.setIsSendLoading(false);
      resetForm();
    } catch (e) {
      console.log(e);
      props.setIsSendError(true);
      props.setIsSendFinish(true);
      props.setIsSendLoading(false);
      resetForm();
    }
  };

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
        onClick={saveAction}
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
