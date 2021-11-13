// import logo from "../../assets/logo/loginLogo.png";
import * as React from "react";
// import { Img } from "@chakra-ui/react";
import "./LoginPage.scss";
import { LoginForm } from "./loginForm";
import { LoginLogo } from "../../assets/logo/LoginLogo";

export const LoginPage = (props) => {
  return (
    <>
      <div className={"loginPageContainer1"}>
        <div className={"loginLogoContainer"}>
          <LoginForm login={props.login} />
          <LoginLogo className={{ LoginLogo }} />
        </div>
      </div>
    </>
  );
};
