import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { Typography } from "@mui/material";
import { KanbanCardsContext } from "../../../utlis/hooks/kanbanCardsData/kanbanCardsContext";

const NonDetailedForm = (props) => {
  const [orderName, setName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderCompany, setOrderCompany] = useState("");
  const { addCard, state } = useContext(KanbanCardsContext);

  const saveNewCard = (orderName, orderNumber, orderDate, orderCompany) => {
    addCard({
      cardName: orderName,
      date: orderDate,
      shopName: orderCompany.toLowerCase(),
      id: state.cards.length + 1,
      state: props.addPosition,
    });
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
        <Button color={"secondary"} variant="outlined">
          ADVANCED
        </Button>
        <Button
          onClick={() =>
            saveNewCard(orderName, orderNumber, orderDate, orderCompany)
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
