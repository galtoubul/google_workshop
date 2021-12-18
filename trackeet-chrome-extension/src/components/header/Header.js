import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./header.scss";
import { Img } from "@chakra-ui/react";
import logo from "../../assets/logo/logo.png";
import { DARK_TURQUOISE } from "../../assets/colors/colorsPalette";
import { SettingsButton } from "./buttons/SettingsButton";
import { LogoutButton } from "./buttons/LogoutButton";

export const Header = (props) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: DARK_TURQUOISE }}>
      <Toolbar
        sx={{
          backgroundColor: DARK_TURQUOISE,
        }}
        className={"ToolBar"}
      >
        <div className={"logoContainer"}>
          <Img className={"logo"} src={logo} alt={"logo"} />
          <div className={"buttonsContainer"}>
            {props.isLoggedIn ? <LogoutButton logOut={props.logOut} /> : null}
            <SettingsButton />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
