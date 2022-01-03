import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { FormContext } from "../formContext/formContext";
import { useContext, useEffect } from "react";
import { useForm } from "../formContext/useForm";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { BOARDER_RADIUS } from "../../../assets/styles/styles";
import { BLACK, WHITE } from "../../../assets/colors/colorsPalette";
import * as React from "react";
import {
  ORDER_NAME_LENGTH,
  validateNormalText,
  validateOrderName,
} from "../formContext/validateForm";
import { EditableText } from "../../../components/forms/editableText";

const NonDetailedForm = (props) => {
  const { saveCard } = useForm();
  const { getSetInputValueCallback, openDetailedForm, state } =
    useContext(FormContext);
  const { orderName, orderNumber, estimatedArrivingDate, company } = state.card;
  const { isCheckFormFailed } = state;

  useEffect(() => {
    getSetInputValueCallback("position")(props.newCardPosition);
  }, [props.newCardPosition, props.isNonDetailedFormOpen]);

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
    <Rodal
      height={450}
      width={360}
      visible={props.isNonDetailedFormOpen}
      onClose={props.closeForm}
      closeOnEsc={true}
      customStyles={{
        borderRadius: BOARDER_RADIUS,

        display: "flex",
        justifyContent: "center",
        backgroundColor: WHITE,
        background: `linear-gradient(0deg, ${WHITE} 82.79%, ${BLACK} 83%, ${WHITE} 83.1%)`,
      }}
    >
      <div className={"form-container"}>
        <div className="non-detailed-form-header">
          <EditableText
            titleSize={"h6"}
            width={"80%"}
            onChange={getSetInputValueCallback("orderName")}
            value={orderName}
          />
        </div>
        <div className="non-detailed-form-input-fields">
          <TextInput
            error={
              isCheckFormFailed && !validateOrderName(state.card.orderName)
            }
            label="Order Name"
            onChange={(event) => {
              if (event.target.value.length <= ORDER_NAME_LENGTH) {
                getSetInputValueCallback("orderName")(event.target.value);
              }
            }}
            value={orderName}
          />
          <AutocompleteInput
            onChange={(event, newInputValue) =>
              getSetInputValueCallback("company")(newInputValue)
            }
            value={company}
            label="Company"
            autocompleteList={companies}
            error={isCheckFormFailed && !validateNormalText(state.card.company)}
          />

          <TextInput
            label="Order Number"
            error={
              isCheckFormFailed && !validateNormalText(state.card.orderNumber)
            }
            onChange={(event) =>
              getSetInputValueCallback("orderNumber")(event.target.value)
            }
            value={orderNumber}
          />
          <DatePickerInput
            onChange={(newDate) =>
              getSetInputValueCallback("estimatedArrivingDate")(newDate)
            }
            value={estimatedArrivingDate}
            label="Estimated Arriving Date"
          />
        </div>
        <div className="non-detailed-form-buttons">
          <Button
            sx={{ marginRight: "8px" }}
            color={"secondary"}
            variant="outlined"
            onClick={openDetailedForm}
          >
            Advanced
          </Button>
          <Button
            sx={{ marginLeft: "8px" }}
            onClick={() => saveCard(state.card)}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    </Rodal>
  );
};

export default NonDetailedForm;
