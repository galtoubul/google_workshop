import Typography from "@mui/material/Typography";
import { LoginLogo } from "../../../assets/logo/LoginLogo";
import * as React from "react";
import { ContactUsFields } from "./ContactUsFields";
import { Truck } from "../img/Truck";

export const ContactUs = () => {
  return (
    <div className={"contactUsContainer"} id="Contact Us">
      <div className={"ContactUsFormContainer"}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "12px",
          }}
          variant="h5"
        >
          Contact us
        </Typography>
        <ContactUsFields />
      </div>
      <div className={"loginLogoContainer"}>
        <Truck className={{ LoginLogo }}></Truck>
      </div>
    </div>
  );
};
