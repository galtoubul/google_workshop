import Box from "@mui/material/Box";
import SignIn from "./signIn/SignIn";

const Login = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: 240 }}>
      <SignIn login={props.login} />
    </Box>
  );
};

export default Login;
