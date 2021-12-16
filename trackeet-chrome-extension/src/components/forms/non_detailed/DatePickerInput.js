import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import Box from "@mui/material/Box";

const DatePickerInput = (props) => {
  const [value, setValue] = useState(null);
  return (
    <Box
      sx={{
        backgroundColor: "red",
        width: 100,
      }}
    >
      <DatePicker
        disableOpenPicker={false}
        inputFormat={"dd/mm/yyyy"}
        label={props.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ margin: "2% 5%" }} />
        )}
      />
    </Box>
  );
};

export default DatePickerInput;
