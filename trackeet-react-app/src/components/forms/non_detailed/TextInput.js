import TextField from "@mui/material/TextField";
import { FIELD_WIDTH } from "../../../assets/styles/styles";

const TextInput = (props) => {
  return (
    <TextField
      sx={{ width: props.width ? props.width : FIELD_WIDTH }}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
