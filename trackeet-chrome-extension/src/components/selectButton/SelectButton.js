import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { ADD_NEW_ORDER } from "../../containers/mainpage/MainPage";

export const SelectButton = (props) => {
  return (
    <FormControl sx={{ margin: "2% 5%" }} size="small">
      <InputLabel>{ADD_NEW_ORDER}</InputLabel>
      <Select
        value={props.addCardPosition}
        label={ADD_NEW_ORDER}
        onChange={(t) => props.openForm(t.target.value)}
      >
        <MenuItem value={ADD_NEW_ORDER}>Add new order</MenuItem>
        <MenuItem value={"WishList"}>WishList</MenuItem>
        <MenuItem value={"On The Way"}>On The Way</MenuItem>
        <MenuItem value={"Arrived"}>Arrived</MenuItem>
      </Select>
    </FormControl>
  );
};
