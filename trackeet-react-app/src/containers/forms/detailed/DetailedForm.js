import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./DetailedForm.scss";
import Button from "@mui/material/Button";
import { useContext } from "react";
import MultilineInput from "../../../components/forms/MultilineInput";
import Toggle from "../../../components/forms/Toggle";
import CurrencyInput from "../../../components/forms/CurrencyInput";
import { FormContext } from "../formContext/formContext";
import { useForm } from "../formContext/useForm";
import { TimeLine } from "../../../components/forms/timeLine/TimeLine";
import { Typography } from "@mui/material";
import { getLogo } from "../../../components/common/companyLogo/getLogo";

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
    position,
  } = state.card;

  const { saveCard } = useForm();
  console.log(state.card);
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
    <form className="detailed-form-container">
      <section className="tabs-container">
        <div className="tabs-header-container">
          <div className="tabs-header">
            <div className="heading">
              <div className="icon">{getLogo(company)}</div>
              <div className="title">
                <Typography variant="h4">{orderName}</Typography>
              </div>
            </div>
            <div className="heading-toggle-buttons">
              <Toggle></Toggle>
            </div>
          </div>
        </div>

        <div className="tabs-info">
          <div className="row">
            <TextInput
              label="Order Name"
              onChange={(event) =>
                getSetInputValueCallback("orderName")(event.target.value)
              }
              value={orderName}
            />
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
          </div>
          <div className="row">
            <TextInput
              label="URL"
              onChange={(event) =>
                getSetInputValueCallback("url")(event.target.value)
              }
              value={url}
            />
            <CurrencyInput></CurrencyInput>
            <DatePickerInput
              onChange={(newDate) =>
                getSetInputValueCallback("orderDate")(
                  newDate.toLocaleDateString("en-US")
                )
              }
              label="Order Date"
              value={orderDate}
            />
          </div>
          <div className="row">
            <div className="two-thirds">
              <MultilineInput
                onChange={(event) =>
                  getSetInputValueCallback("notes")(event.target.value)
                }
                label="notes"
                value={notes}
              ></MultilineInput>
            </div>
            <div className="one-third-container">
              <div className="one-third-elements">
                <div className="one-third-input-fields">
                  <TextInput
                    label="Order Number"
                    onChange={(event) =>
                      getSetInputValueCallback("orderNumber")(
                        event.target.value
                      )
                    }
                    value={orderNumber}
                  />
                </div>
                <div className="one-third-buttons">
                  <div className="save-move-buttons">
                    <Button
                      color={"secondary"}
                      variant="outlined"
                      sx={{ width: "100px" }}
                    >
                      MOVE
                    </Button>
                    <Button
                      onClick={() => saveCard(state.card)}
                      sx={{ width: "100px" }}
                      variant="contained"
                    >
                      SAVE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="time-line-container">
        <div className="time-line-header-container">
          <div className="time-line-header">
            <Typography variant="h5">Timeline</Typography>
          </div>
        </div>
        <div className="time-line-content">
          <TimeLine position={position} />
        </div>
      </section>
    </form>
  );
};

export default DetailedForm;
