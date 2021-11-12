import "./MainPage.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const MainPage = () => {
  const [addingTo, setAdding] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAdding(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      className="box"
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "#EDE9E8",
        "&:hover": {
          backgroundColor: "#F9F9F3",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div className="d">
        <h1> Trackeet </h1>
      </div>
      <Button sx={{ display: "flex", mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">add to:</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          value={addingTo}
          label="add to:"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>WishList</MenuItem>
          <MenuItem value={20}>On The Way</MenuItem>
          <MenuItem value={30}>Arrived</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
