import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

export const Loader = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Box sx={style}>
      <CircularProgress size={65} color="secondary" />
    </Box>
  );
};
