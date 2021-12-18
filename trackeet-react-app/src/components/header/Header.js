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
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { scroller } from "react-scroll";

export const Header = (props) => {
  const { isLoggedIn } = useUserInformationContext();
  const getLoggedInButton = () => {
    return (
      <>
        <Home className={styles.headerIconButton} />
        <Information className={styles.headerIconButton} />
        <Notifications className={styles.headerIconButton} />
        {isLoggedIn && <Login className={styles.headerIconButton} />}
      </>
    );
  };

  const getLoggedOutButtons = () => {
    return <Information className={styles.headerIconButton} />;
  };

  const scrollTo = (position) => {
    scroller.scrollTo(position, {
      offset: -document.getElementById("header").getBoundingClientRect().height,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const pages = ["About Us", "Demo", "Contact Us"];

  return (
    <AppBar
      sx={{
        position: "fixed",
        overflow: "hidden",
        height: "7vh",
        minHeight: "65px",
      }}
      id={"header"}
    >
      <Toolbar
        sx={{
          backgroundColor: DARK_TURQUOISE,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {HeaderLogo()}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "8px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => scrollTo(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>
        {isLoggedIn ? getLoggedInButton() : getLoggedOutButtons()}
      </Toolbar>
    </AppBar>
  );
};
