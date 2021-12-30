import Typography from "@mui/material/Typography";
// import { LoginLogo } from "../../../assets/logo/LoginLogo";
import * as React from "react";
import { ContactUsFields } from "./ContactUsFields";
import { GirlSvg1 } from "../img/GirlSvg";

export const ContactUs = () => {
  return (
    <div className={"contactUsContainer"} id="Contact Us">
      <div className={"contactUsContent"}>
        <div className={"ContactUsFormContainer"}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
            }}
            variant="h5"
          >
            How can we help? <br />
            Send us a message.
          </Typography>
          <ContactUsFields />
        </div>
        <div className={"loginLogoContainer"}>
          <GirlSvg1></GirlSvg1>
        </div>
      </div>
    </div>
  );
};
