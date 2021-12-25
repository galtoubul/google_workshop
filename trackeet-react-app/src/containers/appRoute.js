import { LoginPage } from "./logInPage/LoginPage";
import { Page } from "./page/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment, useState } from "react";
import { UserInformationProvider } from "../utlis/hooks/userInformationContext/userInformationContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ThemColors from "./theme/ThemColors";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Header } from "../components/header/Header";
import { scroller } from "react-scroll";
import { Loader } from "../components/loader/Loader";
import { LogInProvider } from "../utlis/hooks/logInContext/logInContext";

export const AppRoute = (props) => {
  const [scrollPosition, setScrollPosition] = useState("About Us");
  const sitePosition = ["About Us", "Demo", "Contact Us"];

  const scrollToPosition = (position) => {
    setScrollPosition(position);
    scroller.scrollTo(position, {
      offset: -document.getElementById("header").getBoundingClientRect().height,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const changeSitePart = (state) => {
    const newScrollPosition =
      sitePosition[
        state === "next"
          ? Math.min(sitePosition.indexOf(scrollPosition) + 1, 2)
          : Math.max(sitePosition.indexOf(scrollPosition) + -1, 0)
      ];

    setScrollPosition(newScrollPosition);
    scroller.scrollTo(newScrollPosition, {
      offset: -document.getElementById("header").getBoundingClientRect().height,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  // const { isLoggedIn } = useUserInformationContext();

  return (
    <LogInProvider>
      <Router>
        <ThemColors>
          <UserInformationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Header scrollToPosition={scrollToPosition} />
              <Fragment>
                <Routes>
                  <Route exact path="/" element={<Loader />} />
                  <Route exact path="/site" element={<Page></Page>} />
                  <Route
                    exact
                    path="/login"
                    element={<LoginPage changeSitePart={changeSitePart} />}
                  />
                </Routes>
              </Fragment>
            </LocalizationProvider>
          </UserInformationProvider>
        </ThemColors>
      </Router>
    </LogInProvider>
  );
};

// isLoggedIn ? (
//   <Page></Page>
// ) : (
//   <LoginPage changeSitePart={props.changeSitePart} />
// );
