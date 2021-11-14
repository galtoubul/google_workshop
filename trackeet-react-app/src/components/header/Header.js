import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Information } from "../../components/header/buttons/Information";
import { Home } from "../../components/header/buttons/Home";
import { Notifications } from "../../components/header/buttons/Notifications";
import { Login } from "../../components/header/buttons/Login";
import styles from "./header.scss";
import { DARK_TURQUOISE } from "../../assets/colors/colorsPalette";
import { HeaderLogo } from "./headerLogo/headerLogo";

export const Header = (props) => {
  const getLoggedInButton = () => {
    return (
      <>
        <Home className={styles.headerIconButton} />
        <Information className={styles.headerIconButton} />
        <Notifications className={styles.headerIconButton} />
        <Login logOut={props.logOut} className={styles.headerIconButton} />
      </>
    );
  };

  const getLoggedOutButtons = () => {
    return <Information className={styles.headerIconButton} />;
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: DARK_TURQUOISE }}>
        {HeaderLogo()}
        {props.isLoggedIn ? getLoggedInButton() : getLoggedOutButtons()}
      </Toolbar>
    </AppBar>
  );
};
