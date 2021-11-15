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
  const { currency } = state.card;

  return (
    <div className="input-fields-container">
      <TextInput></TextInput>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency"
            onChange={(event) =>
              getSetInputValueCallback("currency")(event.target.value)
            }
          >
            <MenuItem value={10}>ILS</MenuItem>
            <MenuItem value={20}>USD</MenuItem>
            <MenuItem value={30}>EUR</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );

  //   return (
  //     <Box sx={{ minWidth: 120 }}>
  //       <FormControl fullWidth>
  //         <InputLabel id="demo-simple-select-label">Age</InputLabel>
  //         <Select
  //           labelId="demo-simple-select-label"
  //           id="demo-simple-select"
  //           value={age}
  //           label="Age"
  //           onChange={handleChange}
  //         >
  //           <MenuItem value={10}>Ten</MenuItem>
  //           <MenuItem value={20}>Twenty</MenuItem>
  //           <MenuItem value={30}>Thirty</MenuItem>
  //         </Select>
  //       </FormControl>
  //     </Box>
  //   );
};

export default CurrencyInput;
