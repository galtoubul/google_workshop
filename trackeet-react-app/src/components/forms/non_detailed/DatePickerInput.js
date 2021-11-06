import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";

const DatePickerInput = (props) => {
  const [value, setValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={props.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ width: "223px" }} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerInput;
