import React from "react";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";
import Box from "@mui/material/Box";
import { WHITE } from "../../../assets/colors/colorsPalette";
import { LoginModalLogo } from "./LoginModalLogo";
import Typography from "@mui/material/Typography";
import { BOARDER_RADIUS } from "../../../assets/styles/styles";
import { getLogo } from "../../../components/common/companyLogo/getLogo";
import Button from "@mui/material/Button";
import Rodal from "rodal";

export const LoginModal = (props) => {
  const { logIn } = useUserInformationContext();

  // Error Handler
  // const responseGoogleError = (response) => {

  // };

  const style = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: WHITE,
    width: "100%",
    height: "100%",
    boxShadow: 24,
    p: 4,
    zIndex: 1800000,
    borderRadius: BOARDER_RADIUS,
  };

  return (
    <Rodal
      height={280}
      width={350}
      visible={props.isOpen}
      onClose={props.closeModal}
      closeOnEsc={true}
      customStyles={{
        zIndex: 1800000,
        maxHeight: "95%",
        maxWidth: "95%",
      }}
    >
      <Box sx={style} className="login-container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "45%",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ width: "25%", margin: "2px" }}>
            <LoginModalLogo />
          </Box>
          <Box sx={{ margin: "2px" }}>
            <Typography variant="h4">Trackeet</Typography>
          </Box>
          <Box sx={{ margin: "4px" }}>
            <Typography variant="h6">Manage all your orders</Typography>
          </Box>
        </Box>

        <Button
          sx={{ width: "80%" }}
          onClick={logIn}
          variant="outlined"
          startIcon={getLogo("Google")}
        >
          Sign in with google
        </Button>
      </Box>
    </Rodal>
  );
};
