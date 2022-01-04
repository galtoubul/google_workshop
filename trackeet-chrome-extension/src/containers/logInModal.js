import React from "react";
import { GoogleLogin } from "react-google-login";
import { useUserInformationContext } from "./userInformationContext";

export const CLIENT_ID =
  "233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com";

export const GoogleLoginButton = (props) => {
  const { addInformationToUser, logIn } = useUserInformationContext();
  const responseGoogleSuccess = (response) => {
    // eslint-disable-next-line no-promise-executor-return
    const p = new Promise((resolve) => resolve(response.tokenId));
    logIn();
    addInformationToUser(p);
  };

  const responseGoogleError = (response) => {
    console.log("error");
  };

  return (
    <div className="login-container">
      <div className="login-buttons-container">
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
