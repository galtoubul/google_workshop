import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./DetailedForm.scss";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
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
import { useIsPhoneContext } from "../../../utlis/hooks/phone/isPhoneContext";
import { ToggleButtonGroup } from "@material-ui/core";
import ToggleButton from "@mui/material/ToggleButton";

const DetailedForm = (props) => {
  const { getSetInputValueCallback, state, closeForm, setOldCard } =
    useContext(FormContext);
  const { isDetailedFormOpen, isCheckFormFailed, isNewForm } = state;
  const { isIpadForForm, screenWidth, screenHeight, isPhone } =
    useIsPhoneContext();
  const [isTimeline, setIsTimeline] = useState("Form");

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
      height={isIpadForForm ? screenHeight * 0.8 : 630}
      width={isIpadForForm ? 0.95 * screenWidth : 910}
      visible={isDetailedFormOpen}
      onClose={closeForm}
      closeOnEsc={true}
      customStyles={{
        maxHeight: !isPhone && 680,
        overflowY: "auto",
        top: screenHeight < 650 && "11%",
        overflowX: "hidden",
        borderRadius: BOARDER_RADIUS,
        display: "flex",
        flexDirection: "row",
        background:
          !isIpadForForm &&
          `linear-gradient(90deg,${WHITE} 76.5%, ${GREY} 76.5%)`,
      }}
    >
      <div className={"leftPartContainer"}></div>

      <div className={"detailed-form-container"}>
        <div className="detailed-form-header-container">
          <div className="detailed-form-header">
            <EditableText
              width={isPhone && "50%"}
              titleSize={isPhone ? "h6" : "h5"}
              onChange={getSetInputValueCallback("orderName")}
              readonly={isPhone}
              value={
                !isPhone || orderName.length <= 8
                  ? orderName
                  : `${orderName.slice(0, 8)}...`
              }
            />
            {isIpadForForm && (
              <div className="time-line-button">
                <ToggleButtonGroup
                  color="primary"
                  value={isTimeline}
                  exclusive
                  onChange={(event, newVal) => {
                    setIsTimeline(newVal);
                  }}
                >
                  <ToggleButton value="Form">Form</ToggleButton>
                  <ToggleButton value="Timeline">Timeline</ToggleButton>
                </ToggleButtonGroup>
              </div>
            )}
            {!isIpadForForm && (
              <div className="detailed-form-icon">{getLogo(company)}</div>
            )}
          </div>
        </div>

        <div
          className={
            !isIpadForForm || (isIpadForForm && isTimeline === "Form")
              ? "detailed-form-input-fields-with-notes"
              : "detailed-form-input-fields-with-notes-timeline"
          }
        >
          {(!isIpadForForm || (isIpadForForm && isTimeline === "Form")) && (
            <>
              <div className="detailed-form-input-fields">
                <TextInput
                  width={isIpadForForm && "90%"}
                  label="Order Name"
                  onChange={(event) => {
                    if (event.target.value.length <= ORDER_NAME_LENGTH) {
                      getSetInputValueCallback("orderName")(event.target.value);
                    }
                  }}
                  error={
                    isCheckFormFailed &&
                    !validateOrderName(state.card.orderName)
                  }
                  value={state.card.orderName}
                />
                <AutocompleteInput
                  width={isIpadForForm && "90%"}
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
                  width={isIpadForForm && "90%"}
                  onChange={(newDate) =>
                    getSetInputValueCallback("estimatedArrivingDate")(newDate)
                  }
                  label="Estimated Arriving Date"
                  value={estimatedArrivingDate}
                />
                <DatePickerInput
                  width={isIpadForForm && "90%"}
                  onChange={(newDate) =>
                    getSetInputValueCallback("orderDate")(newDate)
                  }
                  label="Order Date"
                  value={orderDate}
                />
                <TextInput
                  width={isIpadForForm && "90%"}
                  error={
                    isCheckFormFailed &&
                    !validateNormalText(state.card.orderNumber)
                  }
                  label="Order Number"
                  onChange={(event) =>
                    getSetInputValueCallback("orderNumber")(event.target.value)
                  }
                  value={orderNumber}
                />
                <CurrencyInput
                  width={isIpadForForm && "90%"}
                  error={
                    isCheckFormFailed &&
                    !validateCurrencyAmount(state.card.currencyAmount)
                  }
                />
              </div>

              <div className={"detailed-notes"}>
                <TextInput
                  width={!isIpadForForm ? "643px" : isPhone ? "90%" : "98%"}
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
                  width={!isIpadForForm ? "643px" : isPhone ? "90%" : "98%"}
                />
              </div>
            </>
          )}
        </div>

        <div className="detailed-form-buttons">
          <Button
            sx={{ marginRight: isIpadForForm && "8px" }}
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

      {(!isIpadForForm || isTimeline === "Timeline") && (
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
      )}
    </Rodal>
  );
};

export default DetailedForm;
