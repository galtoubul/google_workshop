import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./header.scss";
//import { Img } from "@chakra-ui/react";
import { DARK_TURQUOISE } from "../../assets/colors/colorsPalette";
// import { LogoutButton } from "./buttons/LogoutButton";
import { useUserInformationContext } from "../../containers/userInformationContext";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { Logo } from "../../assets/logo/Logo";
import IconButton from "@mui/material/IconButton";

export const Header = (props) => {
  // const { setLogOutState, isLoggedIn } = useUserInformationContext();
  const { cleanButton, setFormData } = useUserInformationContext();
  const resetForm = () => {
    setFormData({
      order_name: "",
      url: "",
      currency: "", // todo fix the currency enum with the server .,
      company: "",
      order_date: null,
      estimated_arrival_date: null,
      order_serial_code: "",
      order_status: "",
      order_price: "",
    });
  };

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
            {/*{isLoggedIn ? <LogoutButton logOut={setLogOutState} /> : null}*/}
            {cleanButton ? (
              <IconButton size="small" onClick={resetForm}>
                <CleaningServicesIcon fontSize="inherit" />
              </IconButton>
            ) : null}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
