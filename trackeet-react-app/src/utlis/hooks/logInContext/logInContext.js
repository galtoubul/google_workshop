import React, { createContext, useContext, useState } from "react";
import { initApi } from "../../api/api";

const LogInContext = createContext({});

export const LogInProvider = (props) => {
  const [userInformation, setUserInformation] = useState("");
  const [api, setApi] = useState(initApi("", false));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LogInContext.Provider
      value={{
        userInformation,
        setUserInformation,
        api,
        setApi,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </LogInContext.Provider>
  );
};

export const useLogInContext = () => useContext(LogInContext);
