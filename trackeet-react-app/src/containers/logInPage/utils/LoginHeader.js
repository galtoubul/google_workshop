import * as React from "react";
import Typography from "@mui/material/Typography";
import "./LoginHeader.scss";
import Button from "@mui/material/Button";
import { HeaderBackground } from "../img/HeaderBackground";

export const LoginHeader = (props) => {
  return (
    <div className="headerLogin" id={"About Us"}>
      <div className={"backgroundHeader"}>
        <HeaderBackground />
      </div>
      <div className={"LoginDivContainer"}>
        <Typography sx={{ marginBottom: "24px", width: "410px" }} variant="h5">
          Make Tracking Online Orders Easier
        </Typography>
        <Typography sx={{ marginTop: "24px", width: "410px" }} variant="h6">
          Effortlessly track, organize and know exactly when your international
          orders will arrive, with Trackeet.
        </Typography>
        <Button
          onClick={props.openLoggingModal}
          sx={{ marginTop: "24px" }}
          variant="contained"
        >
          Start tracking - it’s free!
        </Button>
      </div>
    </div>
  );
};
