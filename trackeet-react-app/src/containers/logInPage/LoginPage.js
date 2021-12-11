/* eslint-disable no-alert */
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import "./LoginPage.scss";
import { LoginLogo } from "../../assets/logo/LoginLogo";
import { getLogo } from "../../components/common/companyLogo/getLogo";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshToken";

const clientId =
  "233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com";

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

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
  console.log(clientId);
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
          onClick={signIn}
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
