import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";

const DatePickerInput = (props) => {
  const [value, setValue] = useState(null);
  return (
    <DatePicker
      disableOpenPicker={true}
      inputFormat={"DD/MM/YYYY"}
      label={props.label}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} sx={{ margin: "2% 5%" }} />
      )}
    />
  );
};

export default DatePickerInput;
