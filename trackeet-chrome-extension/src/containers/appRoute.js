import { MainPage } from "./mainpage/MainPage";
import SignIn from "./signIn/SignIn";
import * as React from "react";
//import { useUserInformationContext } from "./userInformationContext";

export const AppRoute = () => {
  //const { isLoggedIn } = useUserInformationContext();
  return (
    // eslint-disable-next-line no-constant-condition
    <>{true ? <MainPage className={"mainPage"}></MainPage> : <SignIn />}</>
  );
};
