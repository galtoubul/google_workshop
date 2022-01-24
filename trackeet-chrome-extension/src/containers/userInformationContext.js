import React, { createContext, useContext, useEffect, useState } from "react";
import { initApi } from "../api/api";

const UserInformationContext = createContext({});

export const UserInformationProvider = (props) => {
  const [userInformation, setUserInformation] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [api, setApi] = useState({});

  useEffect(() => {
    setApi(initApi(userInformation, getIsLoggedIn));
  }, [isLoggedIn]);

  const getIsLoggedIn = () => isLoggedIn;

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const setLogOutState = () => {
    setIsLoggedIn(false);
  };

  const addInformationToUser = (userInformationPromise) => {
    userInformationPromise.then((tokenId) => {
      setUserInformation(tokenId);
      logIn();
    });
  };

  return (
    <UserInformationContext.Provider
      value={{
        userInformation,
        addInformationToUser,
        getIsLoggedIn,
        setLogOutState,
        api,
        isLoggedIn,
        logIn,
      }}
    >
      {props.children}
    </UserInformationContext.Provider>
  );
};

export const useUserInformationContext = () =>
  useContext(UserInformationContext);
