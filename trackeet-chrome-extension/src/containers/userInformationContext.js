import React, { createContext, useContext, useEffect, useState } from "react";
import { initApi } from "../api/api";

const UserInformationContext = createContext({});

export const UserInformationProvider = (props) => {
  const [userInformation, setUserInformation] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [api, setApi] = useState({});

  //My part
  const [formData, setFormData] = useState({
    order_name: "",
    url: "",
    currency: "", // todo fix the currency enum with the server .,
    company: "",
    order_date: null,
    estimated_arrival_date: null,
    order_serial_code: "",
    order_status: "",
    order_price: "",
  });

  const resetForm = () => {
    setFormData({
      order_name: "",
      url: "",
      currency: "", // todo fix the currency enum with the server .,
      company: "",
      order_date: null,
      estimated_arrival_date: null,
      order_serial_code: "",
      order_status: "",
      order_price: "",
    });
  };

  const [cleanButton, showCleanButton] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isSendLoading, setIsSendLoading] = useState(false);
  const [isSendFinish, setIsSendFinish] = useState(false);
  const [isSendError, setIsSendError] = useState(false);
  const [isScanSuccess, setIsScanSuccess] = useState(false);
  const [isOrderSerialCodeMissing, setIsOrderSerialCodeMissing] =
    useState(false);
  const [isScanNotSupported, setIsScanNotSupported] = useState(false);
  const [isScanNotSupportedLocation, setIsScanNotSupportedLocation] =
    useState(false);
  const [isScanNotSupportedWebsite, setIsScanNotSupportedWebsite] =
    useState(false);
  const [hostname, setHostname] = useState("");

  //End of my part
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
        formData,
        setFormData,
        cleanButton,
        showCleanButton,
        isLoading,
        setIsLoading,
        isSendLoading,
        setIsSendLoading,
        isSendFinish,
        setIsSendFinish,
        isSendError,
        setIsSendError,
        resetForm,
        isScanSuccess,
        setIsScanSuccess,
        isOrderSerialCodeMissing,
        setIsOrderSerialCodeMissing,
        isScanNotSupported,
        setIsScanNotSupported,
        isScanNotSupportedLocation,
        setIsScanNotSupportedLocation,
        isScanNotSupportedWebsite,
        setIsScanNotSupportedWebsite,
        hostname,
        setHostname,
      }}
    >
      {props.children}
    </UserInformationContext.Provider>
  );
};

export const useUserInformationContext = () =>
  useContext(UserInformationContext);
