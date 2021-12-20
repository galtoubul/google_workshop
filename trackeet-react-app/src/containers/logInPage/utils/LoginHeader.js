import Typography from "@mui/material/Typography";
import { Airplain } from "../img/airplain";
import * as React from "react";
import "./LoginHeader.scss";
import Button from "@mui/material/Button";

export const LoginHeader = (props) => {
  return (
    <header className="headerLogin" id={"About Us"}>
      <div className={"loginTextContainer"}>
        <Typography sx={{ marginBottom: "20px" }} variant="h5">
          All-in-one international tracking <br />
        </Typography>
        <Typography sx={{ marginTop: "20px" }} variant="h6">
          This tool was created to make it easier than ever before to track all
          of your international packages
        </Typography>
        <Button
          onClick={props.openLoggingModal}
          sx={{ marginTop: "8px" }}
          variant="contained"
        >
          Sign up
        </Button>
        <div className={"logInRowContainer"}></div>
      </div>
      <div className={"airPlain"}>
        <Airplain></Airplain>
      </div>
    </header>
  );
};
