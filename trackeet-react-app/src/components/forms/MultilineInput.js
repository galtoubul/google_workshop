import TextField from "@mui/material/TextField";

const MultilineInput = (props) => {
  return (
    <TextField
      onChange={props.onChange}
      value={props.value}
      id="outlined-multiline-static"
      label={props.label}
      multiline
      rows={5}
      sx={{ width: props.width ? props.width : "100%" }}
    />
  );
};

export default MultilineInput;
