import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Information } from "../../components/header/buttons/Information";
import { Home } from "../../components/header/buttons/Home";
import { Notifications } from "../../components/header/buttons/Notifications";
import { Login } from "../../components/header/buttons/Login";
import "./header.css";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Trackeet Bitches!!!
        </Typography>
        <Home className="headerIcon" />
        <Information className="headerIcon" />
        <Notifications className="headerIcon" />
        <Login className="headerIcon" />
      </Toolbar>
    </AppBar>
  );
};
