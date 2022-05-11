import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Login } from "../../components/header/buttons/Login";
import styles from "./header.scss";
import { WHITE } from "../../assets/colors/colorsPalette";
import { HeaderLogo } from "./headerLogo/headerLogo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";
import { useIsPhoneContext } from "../../utlis/hooks/phone/isPhoneContext";
import { MobileButtons } from "./headerMobile/MobileButtons";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = (props) => {
  const location = useLocation();
  const { openLogInModal } = useUserInformationContext();
  const { logIn } = useUserInformationContext();
  const { isIpad } = useIsPhoneContext();

  const [isMenuOpen, setIsOpenMenu] = useState(false);

  const getIsInLogInPage = () => {
    return location.pathname !== "/login";
  };

  const getLoggedInButton = () => {
    return (
      <>{getIsInLogInPage() && <Login className={styles.headerIconButton} />}</>
    );
  };

  const getLoggedOutButtons = () => {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          marginLeft: "12px",
        }}
      >
        {!getIsInLogInPage() &&
          pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 1, display: "block", margin: "4px" }}
              onClick={() => props.scrollToPosition(page)}
            >
              {page}
            </Button>
          ))}
        <Button onClick={logIn} sx={{ my: 1, display: "block", margin: "4px" }}>
          Log in
        </Button>
        <Button
          sx={{ my: 1, display: "block", margin: "4px" }}
          variant="contained"
          onClick={openLogInModal}
        >
          Sign up
        </Button>
      </Box>
    );
  };

  const pages = ["About Us", "Extension", "Demo", "Contact Us"];

  return (
    <Box>
      <AppBar
        sx={{
          position: "fixed",
          overflow: "hidden",
          height: "7vh",
          backgroundColor: WHITE,
          minHeight: "65px",
        }}
        id={"header"}
      >
        <Toolbar
          sx={{
            height: "100%",
            backgroundColor: WHITE,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "160px" }}>
            {HeaderLogo()}
          </Box>
          <Box>
            {getIsInLogInPage() ? (
              getLoggedInButton()
            ) : isIpad ? (
              <IconButton
                onClick={() => {
                  setIsOpenMenu(true);
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              getLoggedOutButtons()
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <MobileButtons
        open={isMenuOpen && isIpad}
        scrollToPosition={props.scrollToPosition}
        close={() => {
          setIsOpenMenu(false);
        }}
      />
    </Box>
  );
};
