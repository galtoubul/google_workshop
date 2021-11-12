import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Information } from "../../components/header/buttons/Information";
import { Home } from "../../components/header/buttons/Home";
import { Notifications } from "../../components/header/buttons/Notifications";
import { Login } from "../../components/header/buttons/Login";
import styles from "./header.scss";
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
        {props.isLoggedIn ? (
          <>
            <Home className={styles.headerIcon} />
            <Information className={styles.headerIcon} />
            <Notifications className={styles.headerIcon} />
            <Login logOut={props.logOut} className={styles.headerIcon} />
          </>
        ) : (
          <>
            <Information className={styles.headerIcon} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
