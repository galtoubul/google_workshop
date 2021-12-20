import { React } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const CardTitle = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h5">{props.cardName}</Typography>
    </Box>
  );
};
