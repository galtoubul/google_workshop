import TextField from "@mui/material/TextField";
import { FIELD_WIDTH } from "../../../assets/styles/styles";

const TextInput = (props) => {
  return (
    <TextField
      error={props.error}
      sx={{ width: props.width ? props.width : FIELD_WIDTH, zIndex: 500 }}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
