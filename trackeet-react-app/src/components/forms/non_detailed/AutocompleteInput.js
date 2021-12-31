import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FIELD_WIDTH } from "../../../assets/styles/styles";

const AutocompleteInput = (props) => {
  return (
    <Autocomplete
      sx={{ width: FIELD_WIDTH }}
      value={props.value}
      onInputChange={props.onChange}
      onChange={props.onChange}
      freeSolo
      options={props.autocompleteList.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default AutocompleteInput;
