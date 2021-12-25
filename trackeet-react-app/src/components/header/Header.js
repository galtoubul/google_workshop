import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Information } from "../../components/header/buttons/Information";
import { Login } from "../../components/header/buttons/Login";
import styles from "./header.scss";
import { DARK_TURQUOISE } from "../../assets/colors/colorsPalette";
import { HeaderLogo } from "./headerLogo/headerLogo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

export const Header = (props) => {
  const location = useLocation();

  const getIsInLogInPage = () => {
    return location.pathname !== "/login";
  };

  const getLoggedInButton = () => {
    return (
      <>{getIsInLogInPage() && <Login className={styles.headerIconButton} />}</>
    );
  };

  const getLoggedOutButtons = () => {
    return <Information className={styles.headerIconButton} />;
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
            {!getIsInLogInPage() &&
              pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={() => props.scrollToPosition(page)}
                >
                  {page}
                </Button>
              ))}
          </Box>
        </Box>
        {getIsInLogInPage() ? getLoggedInButton() : getLoggedOutButtons()}
      </Toolbar>
    </AppBar>
  );
};
