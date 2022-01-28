import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./header.scss";
import { DARK_TURQUOISE, WHITE } from "../../assets/colors/colorsPalette";
import { useUserInformationContext } from "../../containers/userInformationContext";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { Logo } from "../../assets/logo/Logo";
import IconButton from "@mui/material/IconButton";

export const Header = (props) => {
  const { cleanButton, resetForm } = useUserInformationContext();

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
            {cleanButton ? (
              <IconButton
                size="small"
                onClick={resetForm}
                sx={{ color: WHITE }}
              >
                <CleaningServicesIcon fontSize="inherit" />
              </IconButton>
            ) : null}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
