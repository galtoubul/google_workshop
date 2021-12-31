import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./DetailedForm.scss";
import Button from "@mui/material/Button";
import { useContext } from "react";
import MultilineInput from "../../../components/forms/MultilineInput";
import CurrencyInput from "../../../components/forms/CurrencyInput";
import { FormContext } from "../formContext/formContext";
import { useForm } from "../formContext/useForm";
// import { TimeLine } from "../../../components/forms/timeLine/TimeLine";
// import { Typography } from "@mui/material";
import { getLogo } from "../../../components/common/companyLogo/getLogo";
import "rodal/lib/rodal.css";
import { BOARDER_RADIUS } from "../../../assets/styles/styles";
import { GREY, WHITE } from "../../../assets/colors/colorsPalette";
import Rodal from "rodal";
import { EditableText } from "../../../components/forms/editableText";
import Typography from "@mui/material/Typography";
import { TimeLine } from "../../../components/forms/timeLine/TimeLine";

const DetailedForm = (props) => {
  const { getSetInputValueCallback, state, closeForm } =
    useContext(FormContext);
  const { isDetailedFormOpen } = state;
  const {
    orderName,
    url,
    company,
    orderDate,
    estimatedArrivingDate,
    orderNumber,
    notes,
    position,
  } = state.card;

  const { saveCard } = useForm();
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
      height={680}
      width={940}
      visible={isDetailedFormOpen}
      onClose={closeForm}
      closeOnEsc={true}
      customStyles={{
        borderRadius: BOARDER_RADIUS,
        display: "flex",
        flexDirection: "row",
        background: `linear-gradient(90deg,${WHITE} 74%, ${GREY} 74%)`,
      }}
    >
      <div className={"leftPartContainer"}></div>
      <div className={"detailed-form-container"}>
        <div className="detailed-form-header-container">
          <div className="detailed-form-header">
            <EditableText
              onChange={getSetInputValueCallback("orderName")}
              value={orderName}
            />
            <div className="detailed-form-icon">{getLogo(company)}</div>
          </div>
        </div>

        <div className="detailed-form-input-fields-with-notes">
          <div className="detailed-form-input-fields">
            <AutocompleteInput
              onChange={(event, newInputValue) =>
                getSetInputValueCallback("company")(newInputValue)
              }
              label="Company"
              autocompleteList={companies}
              value={company}
            />

            <DatePickerInput
              onChange={(newDate) =>
                getSetInputValueCallback("estimatedArrivingDate")(
                  newDate.toLocaleDateString("en-US")
                )
              }
              label="Estimated Arriving Date"
              value={estimatedArrivingDate}
            />

            <TextInput
              label="URL"
              onChange={(event) =>
                getSetInputValueCallback("url")(event.target.value)
              }
              value={url}
            />
            <CurrencyInput />
            <DatePickerInput
              onChange={(newDate) =>
                getSetInputValueCallback("orderDate")(
                  newDate.toLocaleDateString("en-US")
                )
              }
              label="Order Date"
              value={orderDate}
            />
            <TextInput
              label="Order Number"
              onChange={(event) =>
                getSetInputValueCallback("orderNumber")(event.target.value)
              }
              value={orderNumber}
            />
          </div>
          <div className={"detailed-notes"}>
            <MultilineInput
              onChange={(event) =>
                getSetInputValueCallback("notes")(event.target.value)
              }
              label="notes"
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
          <TimeLine position={position} />
        </div>
      </div>
    </Rodal>
  );
};

export default DetailedForm;
