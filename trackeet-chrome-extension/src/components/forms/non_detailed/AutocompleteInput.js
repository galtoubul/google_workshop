import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutocompleteInput = (props) => {
  const inputChange = (value) => {
    props.setValue(value);
  };

  return (
    <Autocomplete
      sx={{ margin: "2% 5%" }}
      onInputChange={(event, value) => {
        inputChange(value);
      }}
      value={props.value}
      disableClearable={true}
      onChange={(event) => inputChange(event.target.textContent)}
      freeSolo
      size="small"
      options={props.autocompleteList.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default AutocompleteInput;
