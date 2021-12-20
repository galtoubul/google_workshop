import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export const SelectButton = (props) => {
  return (
    <FormControl sx={{ margin: "2% 5%" }} size="small">
      <InputLabel id="order-status-select-label">Order Status</InputLabel>
      <Select
        labelId="order-status-select-label"
        id="order-status-select"
        label="Order Status"
        onChange={(event) => {
          props.addInformation(event.target.value);
        }}
      >
        <MenuItem value={"WishList"}>WishList</MenuItem>
        <MenuItem value={"On The Way"}>On The Way</MenuItem>
        <MenuItem value={"Arrived"}>Arrived</MenuItem>
      </Select>
    </FormControl>
  );
};
