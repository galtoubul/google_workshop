import * as React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { boxStyle, fabStyle } from "./insertButtonStyle";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";

export const InsertButton = (props) => {
  const { isLoggedIn } = useUserInformationContext();
  return isLoggedIn ? (
    <Box sx={boxStyle}>
      <Button
        className="fab"
        size="small"
        color="secondary"
        aria-label="add"
        variant="outlined"
        sx={fabStyle}
        onClick={props.openNonDetailedForm}
      >
        <AddIcon />
      </Button>
    </Box>
  ) : (
    <></>
  );
};
