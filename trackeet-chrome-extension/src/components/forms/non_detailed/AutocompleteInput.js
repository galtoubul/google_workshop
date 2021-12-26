import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FONT_FAMILY, FONT_WEIGHT } from "../../../assets/fonts/font";

const AutocompleteInput = (props) => {
  const inputChange = (value) => {
    props.setValue(value);
  };

  return (
    <Autocomplete
      sx={{ margin: "2% 5%", fontFamily: FONT_FAMILY, fontWeight: FONT_WEIGHT }}
      onInputChange={(event, value) => {
        inputChange(value);
      }}
      value={props.value}
      disableClearable={true}
      onChange={(event) => inputChange(event.target.textContent)}
      freeSolo
      options={props.autocompleteList.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default AutocompleteInput;
