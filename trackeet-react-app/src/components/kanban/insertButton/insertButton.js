import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { boxStyle, fabStyle } from "./insertButtonStyle";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";

export const InsertButton = (props) => {
  const { isLoggedIn } = useUserInformationContext();
  return isLoggedIn ? (
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
  ) : (
    <></>
  );
};
