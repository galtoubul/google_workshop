import * as React from "react";
import Typography from "@mui/material/Typography";
import "./LoginHeader.scss";
import Button from "@mui/material/Button";
import { HeaderBackground } from "../img/HeaderBackground";
import { useIsPhoneContext } from "../../../utlis/hooks/phone/isPhoneContext";
import { HeaderSvg } from "../img/phone/headerSvg";

export const LoginHeader = (props) => {
  const { isPhone, isIpad } = useIsPhoneContext();

  return (
    <div className="headerLogin" id={"About Us"}>
      <div className={"backgroundHeader"}>
        {isPhone ? <HeaderSvg /> : <HeaderBackground />}
      </div>
      <div className={"LoginDivContainer"}>
        <Typography
          sx={{
            textAlign: isIpad ? "center" : undefined,
            marginBottom: "24px",
            width: isIpad ? "250px" : "410px",
          }}
          variant={isIpad ? "h6" : "h5"}
        >
          Make Tracking Online Orders Easier
        </Typography>
        <Typography
          sx={{
            textAlign: isIpad ? "center" : undefined,
            marginTop: "24px",
            width: isIpad ? "250px" : "410px",
          }}
          variant={isIpad ? "h7" : "h6"}
        >
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
