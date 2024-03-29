import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FIELD_WIDTH } from "../../../assets/styles/styles";
import * as React from "react";

const AutocompleteInput = (props) => {
  return (
    <Autocomplete
      sx={{ width: props.width ? props.width : FIELD_WIDTH }}
      value={props.value}
      onInputChange={props.onChange}
      onChange={props.onChange}
      freeSolo
      options={props.autocompleteList.map((option) => option.title)}
      renderInput={(params) => (
        <TextField {...params} error={props.error} label={props.label} />
      )}
    />
  );
};

export default AutocompleteInput;
