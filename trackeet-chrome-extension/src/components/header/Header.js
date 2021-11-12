import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./header.scss";
import { Img } from "@chakra-ui/react";
import logo from "../../assets/logo/logo.png";
import { DARK_TURQUOISE } from "../../assets/colors/colorsPalette";

export const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: DARK_TURQUOISE }}>
        <div className={"logoContainer"}>
          <Img className={"logo"} src={logo} alt={"logo"} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
