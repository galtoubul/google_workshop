import React, { createContext, useContext, useState } from "react";

export const PHONE_WIDTH = 700;
export const IPAD_WIDTH = 1100;

export const getIsPhone = () => {
  return window.innerWidth < PHONE_WIDTH;
};

export const getIsIpad = () => {
  return window.innerWidth < IPAD_WIDTH;
};

export const getIsIpadForForm = () => {
  return window.innerWidth < 910;
};

const IsPhoneContext = createContext({});

export const IsPhoneProvider = (props) => {
  const [isPhone, setIsPhone] = useState(getIsPhone());
  const [isIpad, setIsIpad] = useState(getIsIpad());
  const [isIpadForForm, setIsIpadForForm] = useState(getIsIpadForForm());
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const resize = () => {
    if (
      (!isIpad && getIsIpad()) ||
      (isIpad && !getIsIpad()) ||
      (!isPhone && getIsPhone()) ||
      (isPhone && !getIsPhone())
    )
      window.location.reload();
    setIsPhone(getIsPhone());
    setIsIpad(getIsIpad());
    setIsIpadForForm(getIsIpadForForm);
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  window.addEventListener("resize", resize);

  return (
    <IsPhoneContext.Provider
      value={{
        isPhone,
        isIpad,
        isIpadForForm,
        screenWidth,
        screenHeight,
      }}
    >
      {props.children}
    </IsPhoneContext.Provider>
  );
};

export const useIsPhoneContext = () => useContext(IsPhoneContext);
