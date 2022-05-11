import Typography from "@mui/material/Typography";
// import { LoginLogo } from "../../../assets/logo/LoginLogo";
import * as React from "react";
import { ContactUsFields } from "./ContactUsFields";
import { GirlSvg1 } from "../img/GirlSvg";
import { useIsPhoneContext } from "../../../utlis/hooks/phone/isPhoneContext";

export const ContactUs = () => {
  const { isIpad, isPhone } = useIsPhoneContext();

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
            variant={isIpad ? "h6" : "h5"}
          >
            How can we help? <br />
            Send us a message.
          </Typography>
          <ContactUsFields />
        </div>
        {isPhone || (
          <div className={"loginLogoContainer"}>
            <GirlSvg1></GirlSvg1>
          </div>
        )}
      </div>
    </div>
  );
};
