import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutocompleteInput = (props) => {
  return (
    <Autocomplete
      freeSolo
      options={props.autocompleteList.map((option) => option.title)}
      renderInput={(params) => (
        <TextField {...params} label={props.label} sx={{ width: "223px" }} />
      )}
    />
  );
};

export default AutocompleteInput;
