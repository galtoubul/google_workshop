import logo from "../../assets/logo/loginLogo.png";
import * as React from "react";
import { Img } from "@chakra-ui/react";
import "./LoginPage.scss";
import { LoginForm } from "./loginForm";

export const LoginPage = (props) => {
  return (
    <>
      <div className={"loginPageContainer1"}>
        <div className={"loginLogoContainer"}>
          <LoginForm login={props.login} />
          <Img className={"loginLogo"} src={logo} alt={"logo"} />
        </div>
      </div>
    </>
  );
};
