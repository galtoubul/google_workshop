import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./ContactUs.scss";
import { sendEmail } from "../../../utlis/sendEmail";
import { useState } from "react";
import { Typography } from "@mui/material";
import { LoadingButton } from "@material-ui/lab";
import { DARK_TURQUOISE } from "../../../assets/colors/colorsPalette";

export const ContactUsFields = (props) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSenderSuccess, setSendSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckFormFailed, setIsCheckFormFailed] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkFields = () => {
    return message && email && validateEmail(email);
  };

  const onSend = async () => {
    if (!checkFields()) {
      setIsCheckFormFailed(true);
      return;
    }

    setIsCheckFormFailed(false);
    setIsLoading(true);
    const isSuccess = await sendEmail({ message, email, firstName, lastName });
    setSendSuccess(isSuccess ? "success" : "failed");
    if (isSuccess) {
      setMessage("");
      setEmail("");
      setFirstName("");
      setLastName("");
    }

    setIsLoading(false);
  };

  const onTextChange = (setStateCallback) => (event) => {
    setStateCallback(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "spaceAround",
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
      height="400px"
    >
      <div sx={{ width: 500 }} className={"logInRowContainer"}>
        <TextField
          // error={isCheckFormFailed && !firstName}
          sx={{ m: 1 }}
          id="outlined-error"
          label="First Name"
          value={firstName}
          onChange={onTextChange(setFirstName)}
          // helperText={
          //   isCheckFormFailed && !firstName && "Please add your first name."
          // }
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          // error={isCheckFormFailed && !lastName}
          sx={{ m: 1 }}
          id="outlined-error"
          label="Last Name"
          value={lastName}
          onChange={onTextChange(setLastName)}
          // helperText={
          //   isCheckFormFailed && !lastName && "Please add your last name."
          // }
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          error={isCheckFormFailed && !validateEmail(email)}
          sx={{ m: 1 }}
          id="outlined-error"
          label="Email"
          value={email}
          onChange={onTextChange(setEmail)}
          helperText={
            isCheckFormFailed && !validateEmail(email) && "Incorrect email."
          }
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          error={isCheckFormFailed && !message}
          sx={{ m: 1 }}
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={7}
          value={message}
          onChange={onTextChange(setMessage)}
          helperText={isCheckFormFailed && !message && "Please add a message."}
        />
      </div>

      <div className={"logInRowContainer"}>
        <LoadingButton
          sx={{
            m: 1,
            width: "360px",
            marginBottom: "16px",
            loading: {
              backgroundColor: DARK_TURQUOISE,
            },
          }}
          variant="contained"
          onClick={onSend}
          loading={isLoading}
        >
          Submit
        </LoadingButton>
      </div>
      {isSenderSuccess && (
        <Typography sx={{ marginLeft: "10px" }}>
          {isSenderSuccess === "success"
            ? "The message has been sent."
            : "Error please try again later"}
        </Typography>
      )}
    </Box>
  );
};
