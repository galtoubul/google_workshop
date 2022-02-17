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
import { useIsPhoneContext } from "../../utlis/hooks/phone/isPhoneContext";

const CurrencyInput = (props) => {
  const { getSetInputValueCallback, state } = useContext(FormContext);
  const { currency, currencyAmount } = state.card;
  const { isIpad } = useIsPhoneContext();
  return (
    <div className="input-fields-container">
      <TextInput
        error={props.error}
        onChange={(event) =>
          getSetInputValueCallback("currencyAmount")(event.target.value)
        }
        value={currencyAmount}
        width={isIpad ? "65%" : "185px"}
        label={"Price"}
      />

      <Box sx={{ width: isIpad ? "25%" : "115px" }}>
        <FormControl fullWidth>
          <InputLabel sx={{ zIndex: 500 }} fullWidth>
            Currency
          </InputLabel>
          <Select
            sx={{ zIndex: 500 }}
            fullWidth
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
    </div>
  );
};

export default CurrencyInput;
