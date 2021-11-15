import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { FormContext } from "../formContext/formContext";
import { useContext, useEffect } from "react";
import { useForm } from "../formContext/useForm";

const NonDetailedForm = (props) => {
  const { saveCard } = useForm();
  const { getSetInputValueCallback, openDetailedForm, state } =
    useContext(FormContext);
  const { orderName, orderNumber, estimatedArrivingDate, company } = state.card;

  useEffect(() => {
    getSetInputValueCallback("position")(props.newCardPosition);
    // eslint-disable-next-line
  }, []);

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
          onChange={(event, newInputValue) =>
            getSetInputValueCallback("company")(newInputValue)
          }
          value={company}
          label="Company"
          autocompleteList={companies}
        />
        <TextInput
          label="Order Name"
          onChange={(event) =>
            getSetInputValueCallback("orderName")(event.target.value)
          }
          value={orderName}
        />
        <TextInput
          label="Order Number"
          onChange={(event) =>
            getSetInputValueCallback("orderNumber")(event.target.value)
          }
          value={orderNumber}
        />
        <DatePickerInput
          onChange={(newDate) =>
            getSetInputValueCallback("estimatedArrivingDate")(
              newDate.toLocaleDateString("en-US")
            )
          }
          value={estimatedArrivingDate}
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
        <Button onClick={() => saveCard(state.card)} variant="contained">
          SAVE
        </Button>
      </div>
    </form>
  );
};

export default NonDetailedForm;
