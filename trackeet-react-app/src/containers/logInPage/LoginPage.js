import "./LoginPage.scss";
import Typography from "@mui/material/Typography";
// import kanban from "./img/kanban.png";
// import { Image } from "@chakra-ui/react";
import { Airplain } from "./img/airplain";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
// import { getLogo } from "../../components/common/companyLogo/getLogo";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshToken";
import * as React from "react";
import { Page } from "../page/Page";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { ContactUs } from "./ConatctUs";
import { LoginLogo } from "../../assets/logo/LoginLogo";

const clientId =
  "233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com";

const useStyles = makeStyles({
  startIcon: {
    position: "absolute",
    left: "1rem",
  },
});

export const LoginPage = (props) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    // eslint-disable-next-line no-alert
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    props.login();
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    // eslint-disable-next-line no-alert
    alert(`Failed to login. 😢 `);
  };

  // eslint-disable-next-line no-unused-vars
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
  console.log(clientId);
  return (
    <div>
      <header className="headerLogin">
        <div className={"loginTextContainer"}>
          <Typography sx={{ marginBottom: "24px" }} variant="h5">
            All-in-one international tracking for <br />
            any post office tracking
          </Typography>
          <Typography sx={{ marginTop: "24px" }} variant="h6">
            This track my package universal tracking tool was created to make it
            easier than ever before to track all of your international packages
            by tracking number lookup.
          </Typography>

          <div className={"logInRowContainer"}>
            <Button color={"secondary"} variant="outlined">
              sign Up
            </Button>
            <Button onClick={props.login} color={"primary"} variant="contained">
              Log in
            </Button>
          </div>
        </div>
        <div className={"airPlain"}>
          <Airplain></Airplain>
        </div>
      </header>

      <body className="bodyWithDemo">
        <div className={"loginTextContainer"}>
          <Typography sx={{ marginBottom: "24px" }} variant="h5">
            All-in-one international tracking for <br />
            any post office tracking
          </Typography>
          <Typography sx={{ marginTop: "24px" }} variant="h6">
            This track my package universal tracking tool was created to make it
            easier than ever before to track all of your international packages
            by tracking number lookup.
          </Typography>
        </div>
        <div className="demoPage">
          <Page></Page>
        </div>
      </body>
      <div className={"loginPageContainer1"}>
        <ContactUs />
        <div className={"loginLogoContainer"}>
          <LoginLogo className={{ LoginLogo }} />
        </div>
      </div>
    </div>
  );
};
