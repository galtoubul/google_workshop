import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import ExtensionIcon from "@mui/icons-material/Extension";
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// eslint-disable-next-line consistent-return
const getIcon = (title) => {
  switch (title) {
    case "About Us":
      return <InfoIcon />;
    case "Extension":
      return <ExtensionIcon />;
    case "Demo":
      return <SportsEsportsIcon />;
    case "Contact Us":
      return <EmailIcon />;
    case "Log In":
      return <GoogleIcon />;
    case "Sign Up":
      return <LoginIcon />;
  }
};

export const MobileButtons = (props) => {
  const theme = useTheme();
  const { logIn } = useUserInformationContext();

  const click = (text) => {
    if (text === "Log In") {
      logIn();
    } else {
      props.scrollToPosition(text);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={props.open}
      >
        <DrawerHeader>
          <IconButton onClick={props.close}>
            {theme.direction !== "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["About Us", "Extension", "Demo", "Contact Us", "Log In"].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  click(text);
                  props.close();
                }}
              >
                <ListItemIcon>{getIcon(text)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};
