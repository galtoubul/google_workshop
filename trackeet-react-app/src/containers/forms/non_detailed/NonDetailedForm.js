import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { FormContext } from "../formContext/formContext";
import { useContext, useEffect } from "react";
import { useForm } from "../formContext/useForm";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { BOARDER_RADIUS } from "../../../assets/styles/styles";
import { BLACK, WHITE } from "../../../assets/colors/colorsPalette";

const NonDetailedForm = (props) => {
  const { saveCard } = useForm();
  const { getSetInputValueCallback, openDetailedForm, state } =
    useContext(FormContext);
  const { orderName, orderNumber, estimatedArrivingDate, company } = state.card;

  useEffect(() => {
    getSetInputValueCallback("position")(props.newCardPosition);
  }, [props.newCardPosition]);

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
      visible={props.isNonDetailedFormOpen}
      onClose={props.closeForm}
      customStyles={{
        borderRadius: BOARDER_RADIUS,
        backgroundColor: WHITE,
        background: `linear-gradient(0deg, ${WHITE} 82.79%, ${BLACK} 83%, ${WHITE} 83.1%)`,
      }}
      className="non-detailed-form-container"
    >
      <div className={"form-container"}>
        <div className="non-detailed-form-header">
          <Typography variant={"h6"}>New Order</Typography>
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
