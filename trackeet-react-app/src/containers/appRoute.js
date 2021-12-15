import { useState, useEffect } from "react";
import { LoginPage } from "./logInPage/LoginPage";
import { Page } from "./page/Page";
import { useUserInformationContext } from "../utlis/hooks/userInformationContext/userInformationContext";

export const AppRoute = () => {
  const [clientId, setClientId] = useState("");
  const { isLoggedIn } = useUserInformationContext();
  useEffect(async () => {
    const logInResponse = await fetch("/api/client_id");
    const logInData = logInResponse.json();
    setClientId(logInData.clientId);
  }, []);

  console.log("AppRoute");
  console.log(isLoggedIn);
  // eslint-disable-next-line no-constant-condition
  return isLoggedIn ? <Page></Page> : <LoginPage clientId={clientId} />;
};
