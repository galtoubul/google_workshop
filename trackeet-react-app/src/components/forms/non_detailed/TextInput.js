import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <TextField
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
