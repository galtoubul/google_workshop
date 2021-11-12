import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <TextField
      sx={{ width: "223px" }}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
