import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextInput from "./non_detailed/TextInput";
import "./CurrencyInput.css";

const CurrencyInput = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="input-fields-container">
      <TextInput></TextInput>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Currency"
            onChange={handleChange}
          >
            <MenuItem value={10}>ILS</MenuItem>
            <MenuItem value={20}>USD</MenuItem>
            <MenuItem value={30}>EUR</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );

  //   return (
  //     <Box sx={{ minWidth: 120 }}>
  //       <FormControl fullWidth>
  //         <InputLabel id="demo-simple-select-label">Age</InputLabel>
  //         <Select
  //           labelId="demo-simple-select-label"
  //           id="demo-simple-select"
  //           value={age}
  //           label="Age"
  //           onChange={handleChange}
  //         >
  //           <MenuItem value={10}>Ten</MenuItem>
  //           <MenuItem value={20}>Twenty</MenuItem>
  //           <MenuItem value={30}>Thirty</MenuItem>
  //         </Select>
  //       </FormControl>
  //     </Box>
  //   );
};

export default CurrencyInput;
