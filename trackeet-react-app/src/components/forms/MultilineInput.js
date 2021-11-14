import TextField from "@mui/material/TextField";

const MultilineInput = (props) => {
  return (
    <TextField
      id="outlined-multiline-static"
      label={props.label}
      multiline
      rows={6}
      sx={{ width: "100%" }}
    />
  );
};

export default MultilineInput;
