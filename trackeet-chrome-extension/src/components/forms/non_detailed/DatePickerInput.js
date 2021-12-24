import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
//import Box from "@mui/material/Box";

const DatePickerInput = (props) => {
  return (
    <DatePicker
      disableOpenPicker={true}
      inputFormat={"dd/MM/yyyy"}
      label={props.label}
      value={props.value}
      onChange={(newValue) => {
        props.setValue(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} sx={{ margin: "2% 5%" }} />
      )}
    />
  );
};

export default DatePickerInput;
