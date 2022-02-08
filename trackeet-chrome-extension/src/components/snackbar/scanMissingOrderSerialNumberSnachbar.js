import * as React from "react";
//import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useUserInformationContext } from "../../containers/userInformationContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ScanMissingOrderSerialNumberSnackbar = () => {
  const { isScanSuccess, setIsScanSuccess } = useUserInformationContext();
  const [open, setOpen] = [isScanSuccess, setIsScanSuccess];
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {/*<Button variant="outlined" onClick={handleClick}>*/}
      {/*  Open success snackbar*/}
      {/*</Button>*/}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          sx={{ width: "100%", marginTop: "50px" }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          The order's serial code is{" "}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          missing because the delivery hasn't been shipped yet.
        </Alert>
      </Snackbar>
    </>
  );
};
