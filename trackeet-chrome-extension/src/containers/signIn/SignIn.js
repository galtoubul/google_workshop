/*eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-console, no-unused-vars */

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FcGoogle } from "react-icons/fc";

// eslint-disable-next-line func-style
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href=""
        onClick={() => {
          // eslint-disable-next-line no-undef
          chrome.tabs.create(
            { active: true, url: "http:// trackeet.co" },
            () => {}
          );
        }}
      >
        Trackeet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//const theme = createTheme();

export default function SignIn(props) {
  const handleSubmit = (event) => {
    props.login();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: 240 }}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/*<LockOutlinedIcon />*/}
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 0 }}
          >
            <Button
              type="submit"
              fullWidth
              color="google_button"
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
              endIcon={<FcGoogle />}
            >
              Sign In With Google
            </Button>
            {/*<Grid container>*/}
            {/*<Grid item xs>*/}
            {/*  <Link href="#" variant="body2">*/}
            {/*    Forgot password?*/}
            {/*  </Link>*/}
            {/*</Grid>*/}
            {/*<Grid item>*/}
            {/*  <Link href="#" variant="body2">*/}
            {/*    {"Don't have an account? Sign Up"}*/}
            {/*  </Link>*/}
            {/*</Grid>*/}
          </Box>
        </Box>
        <Copyright sx={{ mt: 0, mb: 0 }} />
      </Container>
    </Box>
  );
}
