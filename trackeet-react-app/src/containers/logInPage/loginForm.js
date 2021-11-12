import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./loginForm.scss";

export const LoginForm = (props) => {
  return (
    <Box
      component="form"
      sx={{
        width: 280,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "spaceAround",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div className={"logInRowContainer"}>
        <TextField id="outlined-error" label="User Name" />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          id="outlined-error-helper-text"
          label="Password"
          type="password"
          // helperText={"incorrect password"}
        />
      </div>
      <div className={"logInRowContainer"}>
        <Button color={"secondary"} variant="outlined">
          sign Up
        </Button>
        <Button onClick={props.login} color={"primary"} variant="contained">
          Log in
        </Button>
      </div>
    </Box>
  );
};
