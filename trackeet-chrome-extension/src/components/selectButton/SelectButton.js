import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { TextField } from "@mui/material";
//import TextField from "@mui/material/TextField";
//import Autocomplete from "@mui/material/Autocomplete";

export const SelectButton = (props) => {
  return (
    <FormControl sx={{ margin: "2% 5%" }}>
      <InputLabel id="order-status-select-label">Order Status</InputLabel>
      <Select
        labelId="order-status-select-label"
        label="Order Status"
        defaultValue={props.value}
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
          props.addInformation(event.target.value);
        }}
        renderInput={(params) => <TextField {...params} label={props.label} />}
      >
        <MenuItem value={"WishList"}>WishList</MenuItem>
        <MenuItem value={"On The Way"}>On The Way</MenuItem>
        <MenuItem value={"Arrived"}>Arrived</MenuItem>
      </Select>
    </FormControl>
  );
};
