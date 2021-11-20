/* eslint-disable no-alert */
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import "./LoginPage.scss";
import { LoginLogo } from "../../assets/logo/LoginLogo";
import { getLogo } from "../../components/common/companyLogo/getLogo";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshToken";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  startIcon: {
    position: "absolute",
    left: "1rem",
  },
});

export const LoginPage = (props) => {
  const classes = useStyles();

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    props.login();
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 `);
  };

  const [clientId, setClientId] = useState();

  useEffect(() => {
    fetch("/api/client_id")
      .then((res) => res.json())
      .then((data) => {
        setClientId(data.client_id);
      });
  }, []);

  const signInWrapper = () => {
    console.log("signInWrapper, client id: ", { clientId });
    signIn();
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <div className="login-container">
      <div className="login-buttons-container">
        <h1 className="login-title">Welcome Back</h1>
        <Button
          className="login-button"
          sx={{ mb: "10px" }}
          variant="outlined"
          startIcon={getLogo("Google")}
          classes={{
            startIcon: classes.startIcon,
          }}
          onClick={signInWrapper}
        >
          Sign in with Google
        </Button>
        <Button
          className="login-button"
          sx={{ mb: "10px" }}
          variant="outlined"
          startIcon={getLogo("Facebook")}
          classes={{
            startIcon: classes.startIcon,
          }}
        >
          Sign in with Facebook
        </Button>
        <Button
          className="login-button"
          sx={{ mb: "10px" }}
          variant="outlined"
          startIcon={getLogo("Amazon")}
          classes={{
            startIcon: classes.startIcon,
          }}
        >
          Sign in with Amazon
        </Button>
        <Button
          className="login-button"
          variant="outlined"
          startIcon={getLogo("Apple")}
          classes={{
            startIcon: classes.startIcon,
          }}
        >
          Sign in with Apple
        </Button>
      </div>
      <div className="separator-container"></div>
      <div className="login-logo-container">
        <LoginLogo className={{ LoginLogo }} />
      </div>
    </div>
  );
};
