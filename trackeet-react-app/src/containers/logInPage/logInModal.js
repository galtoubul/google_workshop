/* eslint-disable no-alert */
// import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/styles";
import "./LoginPage.scss";
// import { getLogo } from "../../components/common/companyLogo/getLogo";
// import { useGoogleLogin } from "react-google-login";
// import { refreshTokenSetup } from "./refreshToken";
// import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";

export const CLIENT_ID =
  "233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com";

// const clientId =
//   "233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com";
//
// const useStyles = makeStyles({
//   startIcon: {
//     position: "absolute",
//     left: "1rem",
//   },
// });

export const LoginModal = (props) => {
  const { addInformationToUser } = useUserInformationContext();

  // const classes = useStyles();
  //
  // const onSuccess = (res) => {
  //   alert(`succc to login. 😢 `);
  //   addInformationToUser(res);
  //   logIn();
  //   refreshTokenSetup(res);
  // };
  //
  // const onFailure = () => {
  //   alert(`Failed to login. 😢 `);
  // };

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId,
  //   isSignedIn: true,
  //   accessType: "offline",
  // });

  // Success Handler
  const responseGoogleSuccess = (response) => {
    // eslint-disable-next-line no-promise-executor-return
    const p = new Promise((resolve) => resolve(response.tokenId));
    console.log("responseGoogleSuccess");
    console.log(response);
    addInformationToUser(p);
    // logIn();
    console.log(response);
  };

  // Error Handler
  const responseGoogleError = (response) => {
    console.log("error");
  };

  // Logout Session and Update State
  // const logout = (response) => {
  //   console.log(response);
  //   let userInfo = {
  //     name: "",
  //     emailId: "",
  //   };
  //   this.setState({ userInfo, isLoggedIn: false });
  // };

  return (
    <div className="login-container">
      <div className="login-buttons-container">
        {/*<Button*/}
        {/*  className="login-button"*/}
        {/*  sx={{ width: "280px", mb: "10px" }}*/}
        {/*  variant="outlined"*/}
        {/*  startIcon={getLogo("Google")}*/}
        {/*  classes={{*/}
        {/*    startIcon: classes.startIcon,*/}
        {/*  }}*/}
        {/*  onClick={signIn}*/}
        {/*>*/}
        {/*  Sign in with Google*/}
        {/*</Button>*/}
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Sign In with Google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleError}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};
