import "./LoginPage.scss";
import * as React from "react";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { Demo } from "./utils/Demo";
import { LoginHeader } from "./utils/LoginHeader";
import { ContactUs } from "./utils/ContactUs";
import { LoginModal } from "./LoginModal/logInModal";
import { useState } from "react";

export const LoginPage = () => {
  const [isLoggInModalOpen, setIslogInModalOpen] = useState(false);

  const openLogInModal = () => {
    setIslogInModalOpen(true);
  };

  const closeLogInModal = () => {
    setIslogInModalOpen(false);
  };

  return (
    <div>
      <LoginHeader openLoggingModal={openLogInModal} />

      <LoginModal closeModal={closeLogInModal} isOpen={isLoggInModalOpen} />
      <div name={"Demo"} id={"Demo"}>
        <Demo />
      </div>
      <ContactUs />
    </div>
  );
};
