import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Box from "@mui/material/Box";
import { FIELD_WIDTH } from "../../../assets/styles/styles";

const DatePickerInput = (props) => {
  const { label, value, onChange } = props;

  return (
    <Box>
      <DatePicker
        disableFuture={props.disableFuture}
        openTo="year"
        inputFormat={"dd/MM/yyyy"}
        label={label}
        value={value}
        onChange={(newDate, y) => {
          onChange(newDate);
        }}
        renderInput={(params) => (
          <TextField
            sx={{ width: props.width ? props.width : FIELD_WIDTH, zIndex: 500 }}
            {...params}
          />
        )}
      />
    </Box>
  );
};

export default DatePickerInput;
