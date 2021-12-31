import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Box from "@mui/material/Box";
import { FIELD_WIDTH } from "../../../assets/styles/styles";

const DatePickerInput = (props) => {
  const { label, value, onChange } = props;

  return (
    <Box>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField sx={{ width: FIELD_WIDTH }} {...params} />
        )}
      />
    </Box>
  );
};

export default DatePickerInput;
