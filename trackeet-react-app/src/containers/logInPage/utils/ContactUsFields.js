import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ContactUs.scss";

export const ContactUsFields = (props) => {
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
    >
      <div sx={{ width: 500 }} className={"logInRowContainer"}>
        <TextField
          sx={{ m: 1, width: "351px" }}
          id="outlined-error"
          label="First Name"
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          sx={{ m: 1, width: "351px" }}
          id="outlined-error"
          label="Last Name"
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          sx={{ m: 1, width: "351px" }}
          id="outlined-error"
          label="Email"
        />
      </div>
      <div className={"logInRowContainer"}>
        <TextField
          sx={{ m: 1, width: "351px" }}
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={7}
        />
      </div>

      <div className={"logInRowContainer"}>
        <Button
          sx={{ m: 1, width: "351px", marginBottom: "16px" }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};
