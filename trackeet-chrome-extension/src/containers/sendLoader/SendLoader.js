import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function SendLoader({
  loading,
  isFinish,
  setIsFinish,
  isError,
}) {
  // React.useEffect(() => {
  //   if (isFinish) {
  //     window.setTimeout(() => {
  //       setIsFinish(false);
  //     }, 2000);
  //   }
  //
  //   return null;
  // }, [loading, isFinish]);

  const openTrackeet = () => {
    setIsFinish(false);
    // eslint-disable-next-line no-undef
    chrome.tabs.create({ active: true, url: "https://trackeet.co" }, () => {});
  };

  const buttonSx = {
    ...(isError && {
      bgcolor: "#ff0000",
      "&:hover": {
        bgcolor: "#ff3333",
      },
    }),
  };

  console.log("sendloader");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {isFinish && (
        <>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "2% 5%" }}
          >
            <Fab
              aria-label="save"
              color="primary"
              value={0}
              size={"small"}
              sx={{ margin: "2% 5%", ...buttonSx }}
            >
              {isError ? <ClearIcon /> : <CheckIcon />}
            </Fab>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "2% 5%" }}
          >
            <Typography>
              {isError
                ? "Failed to create a new tracking card"
                : "Your tracking card was saved"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "2% 5%",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{ margin: "2% 5%" }}
              onClick={openTrackeet}
            >
              Open Trackeet
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{ margin: "2% 5%" }}
              onClick={() => {
                setIsFinish(false);
              }}
            >
              Clear all fields
            </Button>
          </Box>
        </>
      )}
      {loading && (
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "2% 5%" }}
        >
          <CircularProgress value={0} />
        </Box>
      )}
    </Box>
  );
}
