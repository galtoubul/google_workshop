import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

const Toggle = () => {
  const [alignment, setAlignment] = useState("Delivery Info");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton sx={{ width: "100%" }} value="Delivery Info">
        Delivery Info
      </ToggleButton>
      <ToggleButton sx={{ width: "100%" }} value="Statistcs">
        Statistcs
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Toggle;
