import React, { createContext, useContext, useState } from "react";
import { initApi } from "../../api/api";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { CLIENT_ID } from "../../../assets/clientId";
import { useNavigate } from "react-router-dom";
import { useLogInContext } from "../logInContext/logInContext";

const UserInformationContext = createContext({});

export const UserInformationProvider = (props) => {
  const [isServerError, setIsServerError] = useState(true);
  const navigate = useNavigate();

  const {
    userInformation,
    setUserInformation,
    api,
    setApi,
    isLoggedIn,
    setIsLoggedIn,
  } = useLogInContext();

  const onSuccess = (response) => {
    setUserInformation(response.tokenId);
    setIsLoggedIn(true);
    setApi(initApi(response.tokenId, true));
    navigate("../site");
  };

  const onAutoLoadFinished = () => {
    if (!isLoggedIn) {
      navigate("../login");
    }
  };

  const onFailure = () => {
    navigate("../login");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    isSignedIn: true,
    clientId: CLIENT_ID,
    onFailure,
    onAutoLoadFinished,
  });

  const { signOut } = useGoogleLogout({
    clientId: CLIENT_ID,
  });

  const getIsLoggedIn = () => isLoggedIn;

  const logIn = () => {
    signIn();
  };

  const logOut = () => {
    signOut();
    setIsLoggedIn(false);
    setApi(initApi("", false));
    navigate("../login");
  };

  return (
    <UserInformationContext.Provider
      value={{
        userInformation,
        getIsLoggedIn,
        logOut,
        api,
        isLoggedIn,
        logIn,
        isServerError,
        setIsServerError,
      }}
    >
      {props.children}
    </UserInformationContext.Provider>
  );
};

export const useUserInformationContext = () =>
  useContext(UserInformationContext);
