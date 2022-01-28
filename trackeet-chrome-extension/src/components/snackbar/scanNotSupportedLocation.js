import * as React from "react";
//import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useUserInformationContext } from "../../containers/userInformationContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ScanNotSupportedLocation = () => {
  const {
    isScanNotSupportedLocation,
    setIsScanNotSupportedLocation,
    setIsScanNotSupported,
    hostname,
  } = useUserInformationContext();
  const website = hostname;
  const [open, setOpen] = [
    isScanNotSupportedLocation,
    (val) => {
      setIsScanNotSupportedLocation(val);
      setIsScanNotSupported(val);
    },
  ];

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
          severity="info"
          sx={{ width: "100%", marginTop: "50px" }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          {website} is supported with the auto-scan tool, but you aren't inside{" "}
          a proper order page.
        </Alert>
      </Snackbar>
    </>
  );
};
