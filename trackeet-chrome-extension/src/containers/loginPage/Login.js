//import GoogleButton from "react-google-button";
import Box from "@mui/material/Box";
import SignIn from "./signIn/SignIn";

const Login = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: 240 }}>
      {/*<GoogleButton />*/}
      <SignIn />
    </Box>
  );
};

export default Login;
