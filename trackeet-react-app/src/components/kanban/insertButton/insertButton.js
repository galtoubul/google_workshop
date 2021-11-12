import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { boxStyle, fabStyle } from "./insertButtonStyle";

export const InsertButton = (props) => {
  return (
    <Box sx={boxStyle}>
      <Fab
        className="fab"
        size="small"
        color="primary"
        aria-label="add"
        sx={fabStyle}
        onClick={props.openNonDetailedForm}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};