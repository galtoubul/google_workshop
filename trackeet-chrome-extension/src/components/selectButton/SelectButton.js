import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export const SelectButton = (props) => {
  return (
    <FormControl sx={{ margin: "2% 5%" }}>
      <InputLabel>add to:</InputLabel>
      <Select label="add to:" onChange={(t) => props.openForm(t.target.value)}>
        <MenuItem>None</MenuItem>
        <MenuItem value={"WishList"}>WishList</MenuItem>
        <MenuItem value={"On The Way"}>On The Way</MenuItem>
        <MenuItem value={"Arrived"}>Arrived</MenuItem>
      </Select>
    </FormControl>
  );
};
