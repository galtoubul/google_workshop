import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextInput from "./non_detailed/TextInput";
import "./CurrencyInput.css";
import { useContext } from "react";
import { FormContext } from "../../containers/forms/formContext/formContext";

const CurrencyInput = () => {
  const { getSetInputValueCallback, state } = useContext(FormContext);
  const { currency, currencyAmount } = state.card;

  return (
    <Box className="input-fields-container">
      <TextInput
        onChange={(event) =>
          getSetInputValueCallback("currencyAmount")(event.target.value)
        }
        value={currencyAmount}
        sx={{ width: "80%" }}
      />
      <Box sx={{ width: "20%" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="select-label">Currency</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={currency}
            label="Currency"
            onChange={(event) =>
              getSetInputValueCallback("currency")(event.target.value)
            }
          >
            <MenuItem value={"ILS"}>ILS</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CurrencyInput;
