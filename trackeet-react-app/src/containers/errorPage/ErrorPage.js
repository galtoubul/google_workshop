import { ErrorLogo } from "./images/ErrorLogo";
import "./errorPage.scss";
import { BOARDER_RADIUS } from "../../assets/styles/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const ErrorPage = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: BOARDER_RADIUS,
  };

  return (
    <Box sx={style}>
      <Typography variant="h4">There was a technical issue</Typography>
      <div className={"errorLogoContainer"}>
        <ErrorLogo />
      </div>
      <Typography variant="h6">
        Please wait, refresh the page and try again later. Still see this
        message? Please Contact us
      </Typography>
    </Box>
  );
};
