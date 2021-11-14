import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <TextField
      sx={{ margin: "2% 5%" }}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
