import "./LoginPage.scss";
import * as React from "react";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { Demo } from "./utils/Demo";
import { LoginHeader } from "./utils/LoginHeader";
import { ContactUs } from "./utils/ContactUs";
import { LoginModal } from "./LoginModal/logInModal";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { ExtensionDemo } from "./utils/extensionDemo";
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";

export const LoginPage = (props) => {
  document.body.style.overflow = "hidden";

  const { isLoggInModalOpen, openLogInModal, closeLogInModal } =
    useUserInformationContext();

  return (
    <ReactScrollWheelHandler
      upHandler={(e) => props.changeSitePart("prev")}
      downHandler={(e) => props.changeSitePart("next")}
    >
      <div>
        <LoginHeader openLoggingModal={openLogInModal} />

        <LoginModal closeModal={closeLogInModal} isOpen={isLoggInModalOpen} />
        <div id={"Extension"}>
          <ExtensionDemo isPlay={props.isPlay} />
        </div>
        <div name={"Demo"} id={"Demo"}>
          <Demo openLoggingModal={openLogInModal} />
        </div>

        <ContactUs />
      </div>
    </ReactScrollWheelHandler>
  );
};
