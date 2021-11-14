import { Img } from "@chakra-ui/react";
import logo from "../../../assets/logo/logo.png";
import * as React from "react";
import "./HeaderLogo.scss";

export const HeaderLogo = () => {
  return (
    <div className={"logoContainer"}>
      <Img className={"logo"} src={logo} alt={"logo"} />
    </div>
  );
};
