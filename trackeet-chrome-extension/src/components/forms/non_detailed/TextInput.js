import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <TextField
      sx={{ margin: "2% 5%" }}
      label={props.label}
      size="small"
      value={props.value}
      InputLabelProps={{ shrink: true }}
      onChange={(event) => {
        console.log("text event");
        console.log(event);
        props.changeValue(event.target.value);
        props.addInformation(event.target.value);
      }}
    ></TextField>
  );
};

export default TextInput;
