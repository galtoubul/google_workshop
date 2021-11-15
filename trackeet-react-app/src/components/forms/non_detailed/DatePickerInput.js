import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";

const DatePickerInput = (props) => {
  const { label, value, onChange } = props;

  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} sx={{ width: "223px" }} />
      )}
    />
  );
};

export default DatePickerInput;
