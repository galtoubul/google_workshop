import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Typography } from "@mui/material";
import { useKanbanContext } from "../../../utlis/hooks/kanbanContext/kanbanContext";

const NonDetailedForm = (props) => {
  const [orderName, setName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [estimatedArrivingDate, setOrderDate] = useState("");
  const [company, setOrderCompany] = useState("");
  const { addCard } = useKanbanContext();

  const saveNewCard = (orderName, orderNumber, orderDate, orderCompany) => {
    addCard(orderName, orderNumber, orderDate, orderCompany);
    props.closeModal();
  };

  const orderNameChange = (event) => {
    setName(event.target.value);
  };

  const orderNumberChange = (event) => {
    setOrderNumber(event.target.value);
  };

  const orderDateChange = (newDate) => {
    console.log(newDate);
    setOrderDate(newDate.toLocaleDateString("en-US"));
  };

  const orderCompanyChange = (event, newInputValue) => {
    setOrderCompany(newInputValue);
  };

  const openDetailedForm = () => {
    props.openDetailedForm();
    // props.openDetailedForm(
    //   orderName,
    //   orderNumber,
    //   estimatedArrivingDate,
    //   company
    // );
    props.closeModal();
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
        <Typography variant={"h4"}>New Order</Typography>
      </div>
      <div className="non-detailed-form-input-fields">
        <AutocompleteInput
          onChange={orderCompanyChange}
          label="Company"
          autocompleteList={companies}
        />
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
        <DatePickerInput
          onChange={orderDateChange}
          label="Estimated Arriving Date"
        />
      </div>
      <div className="non-detailed-form-buttons">
        <Button
          color={"secondary"}
          variant="outlined"
          onClick={openDetailedForm}
        >
          ADVANCED
        </Button>
        <Button
          onClick={() =>
            saveNewCard(orderName, orderNumber, estimatedArrivingDate, company)
          }
          variant="contained"
        >
          SAVE
        </Button>
      </div>
    </form>
  );
};

export default NonDetailedForm;
