import * as React from "react";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useUserInformationContext } from "../../containers/userInformationContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ScanSuccessSnackbar = () => {
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
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", marginTop: "50px" }}
        >
          Successfully scanned the order!
        </Alert>
      </Snackbar>
    </>
  );
};
