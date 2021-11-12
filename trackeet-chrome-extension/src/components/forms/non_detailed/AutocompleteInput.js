import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutocompleteInput = (props) => {
  return (
    <Autocomplete
      sx={{ margin: "2% 5%" }}
      onInputChange={props.onChange}
      onChange={props.onChange}
      freeSolo
      options={props.autocompleteList.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default AutocompleteInput;
