import TextInput from "../../../components/forms/non_detailed/TextInput.js";
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./DetailedForm.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import MultilineInput from "../../../components/forms/MultilineInput";
import Toggle from "../../../components/forms/Toggle";
import CurrencyInput from "../../../components/forms/CurrencyInput";

const NonDetailedForm = () => {
  const [orderName, setName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [url, setURL] = useState("");

  const orderNameChange = (event) => {
    setName(event.target.value);
  };

  const orderNumberChange = (event) => {
    setOrderNumber(event.target.value);
  };

  const URLChange = (event) => {
    setURL(event.target.value);
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
    <form className="detailed-form-container">
      <section className="tabs-container">
        <div className="tabs-header-container">
          <div className="tabs-header">
            <div className="heading">
              <div className="icon"></div>
              <div className="title">
                <h1>New Order</h1>
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
              onChange={orderNameChange}
              value={orderName}
            />
            <AutocompleteInput label="Company" autocompleteList={companies} />

            <DatePickerInput label="Estimated Arriving Date" />
          </div>
          <div className="row">
            <TextInput label="URL" onChange={URLChange} value={url} />
            <CurrencyInput></CurrencyInput>
            <DatePickerInput label="Order Date" />
          </div>
          <div className="row">
            <div className="two-thirds">
              <MultilineInput label="notes"></MultilineInput>
            </div>
            <div className="one-third-container">
              <div className="one-third-elements">
                <div className="one-third-input-fields">
                  <TextInput
                    label="Order Number"
                    onChange={orderNumberChange}
                    value={orderNumber}
                  />
                </div>
                <div className="one-third-buttons">
                  <div className="save-move-buttons">
                    <Button sx={{ width: "100px" }} variant="contained">
                      SAVE
                    </Button>
                    <Button sx={{ width: "100px" }} variant="contained">
                      MOVE
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
            <h1>Timeline</h1>
          </div>
        </div>
        <div className="time-line-content">content</div>
      </section>
    </form>
  );
};

export default NonDetailedForm;
