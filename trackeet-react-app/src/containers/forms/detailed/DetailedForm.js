import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./DetailedForm.scss";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import MultilineInput from "../../../components/forms/MultilineInput";
import CurrencyInput from "../../../components/forms/CurrencyInput";
import { FormContext } from "../formContext/formContext";
import { useForm } from "../formContext/useForm";
import { getLogo } from "../../../components/common/companyLogo/getLogo";
import "rodal/lib/rodal.css";
import { BOARDER_RADIUS } from "../../../assets/styles/styles";
import { GREY, WHITE } from "../../../assets/colors/colorsPalette";
import Rodal from "rodal";
import { EditableText } from "../../../components/forms/editableText";
import Typography from "@mui/material/Typography";
import { TimeLine } from "../../../components/forms/timeLine/TimeLine";
import {
  ORDER_NAME_LENGTH,
  validateCurrencyAmount,
  validateNormalText,
  validateOrderName,
  validateUrl,
} from "../formContext/validateForm";
import * as React from "react";

const DetailedForm = (props) => {
  const { getSetInputValueCallback, state, closeForm, setOldCard } =
    useContext(FormContext);
  const { isDetailedFormOpen, isCheckFormFailed, isNewForm } = state;

  const {
    orderName,
    url,
    company,
    orderDate,
    estimatedArrivingDate,
    orderNumber,
    notes,
    additionalPosition,
  } = state.card;

  const { saveCard } = useForm();

  useEffect(() => {
    if (!isNewForm) {
      setOldCard(state.card);
    }
  }, [isNewForm]);

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
      height={630}
      width={910}
      visible={isDetailedFormOpen}
      onClose={closeForm}
      closeOnEsc={true}
      customStyles={{
        borderRadius: BOARDER_RADIUS,
        display: "flex",
        flexDirection: "row",
        background: `linear-gradient(90deg,${WHITE} 76.5%, ${GREY} 76.5%)`,
      }}
    >
      <div className={"leftPartContainer"}></div>
      <div className={"detailed-form-container"}>
        <div className="detailed-form-header-container">
          <div className="detailed-form-header">
            <EditableText
              titleSize={"h5"}
              onChange={getSetInputValueCallback("orderName")}
              value={orderName}
            />
            <div className="detailed-form-icon">{getLogo(company)}</div>
          </div>
        </div>

        <div className="detailed-form-input-fields-with-notes">
          <div className="detailed-form-input-fields">
            <TextInput
              label="Order Name"
              onChange={(event) => {
                if (event.target.value.length <= ORDER_NAME_LENGTH) {
                  getSetInputValueCallback("orderName")(event.target.value);
                }
              }}
              error={
                isCheckFormFailed && !validateOrderName(state.card.orderName)
              }
              value={state.card.orderName}
            />
            <AutocompleteInput
              error={
                isCheckFormFailed && !validateNormalText(state.card.company)
              }
              onChange={(event, newInputValue) => {
                const inputValue =
                  newInputValue &&
                  newInputValue.charAt(0).toUpperCase() +
                    newInputValue.toLowerCase().slice(1);
                getSetInputValueCallback("company")(inputValue);
              }}
              label="Company"
              autocompleteList={companies}
              value={company}
            />

            <DatePickerInput
              onChange={(newDate) =>
                getSetInputValueCallback("estimatedArrivingDate")(newDate)
              }
              label="Estimated Arriving Date"
              value={estimatedArrivingDate}
            />
            <DatePickerInput
              onChange={(newDate) =>
                getSetInputValueCallback("orderDate")(newDate)
              }
              label="Order Date"
              value={orderDate}
            />
            <TextInput
              error={
                isCheckFormFailed && !validateNormalText(state.card.orderNumber)
              }
              label="Order Number"
              onChange={(event) =>
                getSetInputValueCallback("orderNumber")(event.target.value)
              }
              value={orderNumber}
            />
            <CurrencyInput
              error={
                isCheckFormFailed &&
                !validateCurrencyAmount(state.card.currencyAmount)
              }
            />
          </div>
          <div className={"detailed-notes"}>
            <TextInput
              width={"643px"}
              label="URL"
              onChange={(event) =>
                getSetInputValueCallback("url")(event.target.value)
              }
              error={isCheckFormFailed && !validateUrl(state.card.url)}
              value={url}
            />

            <MultilineInput
              onChange={(event) =>
                getSetInputValueCallback("notes")(event.target.value)
              }
              label="Notes"
              value={notes}
              width={"643px"}
            />
          </div>
        </div>
        <div className="detailed-form-buttons">
          <Button
            sx={{ marginRight: "8px" }}
            color={"secondary"}
            variant="outlined"
            onClick={closeForm}
          >
            Close
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
      <div className="time-line-container">
        <div className="time-line-header-container">
          <div className="time-line-header">
            <Typography variant="h6">Timeline</Typography>
          </div>
        </div>
        <div className="time-line-content">
          <TimeLine position={additionalPosition} />
        </div>
      </div>
    </Rodal>
  );
};

export default DetailedForm;
