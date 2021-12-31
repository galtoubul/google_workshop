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

  const checkFields = () => {
    return message && email && firstName && lastName;
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
          error={isCheckFormFailed && !firstName}
          sx={{ m: 1 }}
          id="outlined-error"
          label="First Name"
          value={firstName}
          onChange={onTextChange(setFirstName)}
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          error={isCheckFormFailed && !lastName}
          sx={{ m: 1 }}
          id="outlined-error"
          label="Last Name"
          value={lastName}
          onChange={onTextChange(setLastName)}
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          error={isCheckFormFailed && !email}
          sx={{ m: 1 }}
          id="outlined-error"
          label="Email"
          value={email}
          onChange={onTextChange(setEmail)}
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
