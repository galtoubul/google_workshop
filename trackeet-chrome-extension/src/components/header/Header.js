import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./header.scss";
//import { Img } from "@chakra-ui/react";
import { DARK_TURQUOISE } from "../../assets/colors/colorsPalette";
import { LogoutButton } from "./buttons/LogoutButton";
import { useUserInformationContext } from "../../containers/userInformationContext";
import { Logo } from "../../assets/logo/Logo";

export const Header = (props) => {
  const { setLogOutState, isLoggedIn } = useUserInformationContext();
  return (
    <AppBar position="static" sx={{ backgroundColor: DARK_TURQUOISE }}>
      <Toolbar
        sx={{
          backgroundColor: DARK_TURQUOISE,
        }}
        className={"ToolBar"}
      >
        <div className={"headerContainer"}>
          <div className={"logo"}>
            <Logo></Logo>
          </div>
          <div className={"buttonsContainer"}>
            {isLoggedIn ? <LogoutButton logOut={setLogOutState} /> : null}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
