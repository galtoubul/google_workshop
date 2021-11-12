import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";

const DatePickerInput = (props) => {
  const [value, setValue] = useState(null);
  return (
    <DatePicker
      label={props.label}
      value={value}
      onChange={(newValue) => {
        props.onChange(newValue);
        setValue(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} sx={{ width: "223px" }} />
      )}
    />
  );
};

export default DatePickerInput;
