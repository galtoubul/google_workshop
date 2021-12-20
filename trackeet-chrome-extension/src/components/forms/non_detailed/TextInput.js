import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <TextField
      sx={{ margin: "2% 5%" }}
      label={props.label}
      size={"small"}
      onChange={(event) => {
        //console.log(props.orderName);
        //props.setOrderName(event.target.value);
        //props.addInformation(event.target.value);
      }}
    ></TextField>
  );
};

export default TextInput;
