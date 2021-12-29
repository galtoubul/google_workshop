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
import { BLACK, WHITE } from "../../../assets/colors/colorsPalette";
import Rodal from "rodal";

const DetailedForm = (props) => {
  const { getSetInputValueCallback, state } = useContext(FormContext);
  const {
    orderName,
    url,
    company,
    orderDate,
    estimatedArrivingDate,
    orderNumber,
    notes,
    // position,
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
      height={700}
      width={800}
      visible={true}
      onClose={props.closeForm}
      customStyles={{
        display: "flex",
        justifyContent: "center",
        borderRadius: BOARDER_RADIUS,
        backgroundColor: WHITE,
        background: `linear-gradient(0deg, ${WHITE} 87.79%, ${BLACK} 88%, ${WHITE} 88.1%)`,
      }}
    >
      <div className={"detailed-form-container"}>
        <div className="non-detailed-form-header">
          <div className="icon">{getLogo(company)}</div>
          <TextInput
            label="Order Name"
            onChange={(event) =>
              getSetInputValueCallback("orderName")(event.target.value)
            }
            value={orderName}
          />
          {/*<Typography variant="h4">{orderName}</Typography>*/}
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

          <MultilineInput
            onChange={(event) =>
              getSetInputValueCallback("notes")(event.target.value)
            }
            label="notes"
            value={notes}
          />
        </div>
        <div className="detailed-form-buttons">
          <Button
            sx={{ marginRight: "8px" }}
            color={"secondary"}
            variant="outlined"
            onClick={() => {}}
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

export default DetailedForm;
