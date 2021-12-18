import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <TextField
      sx={{ margin: "2% 5%" }}
      label={props.label}
      value={props.value}
      size={"small"}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
