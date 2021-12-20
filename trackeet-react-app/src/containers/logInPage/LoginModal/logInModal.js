import React from "react";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { WHITE } from "../../../assets/colors/colorsPalette";
import { LoginModalLogo } from "./LoginModalLogo";
import Typography from "@mui/material/Typography";
import { BOARDER_RADIUS } from "../../../assets/styles/styles";
import { useGoogleLogin } from "react-google-login";
import { getLogo } from "../../../components/common/companyLogo/getLogo";
import Button from "@mui/material/Button";

export const CLIENT_ID =
  "233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com";

export const LoginModal = (props) => {
  const { addInformationToUser } = useUserInformationContext();
  const onSuccess = (response) => {
    // eslint-disable-next-line no-promise-executor-return
    const p = new Promise((resolve) => resolve(response.tokenId));
    addInformationToUser(p);
  };

  const { signIn } = useGoogleLogin({ onSuccess, clientId: CLIENT_ID });

  // Error Handler
  // const responseGoogleError = (response) => {
  //   console.log("error");
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
    width: 300,
    height: 200,
    boxShadow: 24,
    p: 4,
    borderRadius: BOARDER_RADIUS,
  };

  return (
    <Modal
      open={props.isOpen}
      onClose={props.closeModal}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
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
          onClick={signIn}
          variant="outlined"
          startIcon={getLogo("Google")}
        >
          Sign in with google
        </Button>
      </Box>
    </Modal>
  );
};
