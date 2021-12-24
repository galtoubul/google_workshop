import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Header } from "../../components/header/Header";
import ThemColors from "../theme/ThemColors";
// import { useGoogleLogout } from "react-google-login";
import { UserInformationProvider } from "../../utlis/hooks/userInformationContext/userInformationContext";
import { AppRoute } from "../appRoute";
import { initMock } from "../../utlis/api/utils/mock";
import { scroller } from "react-scroll";
import { useState } from "react";
// import { initMock } from "../../utlis/api/utils/mock";

export const App = () => {
  const [scrollPosition, setScrollPosition] = useState("About Us");
  const sitePosition = ["About Us", "Demo", "Contact Us"];

  const scrollToPosition = (position) => {
    console.log(position);
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

    console.log(newScrollPosition);
    console.log(state);
    setScrollPosition(newScrollPosition);
    console.log(newScrollPosition);
    scroller.scrollTo(newScrollPosition, {
      offset: -document.getElementById("header").getBoundingClientRect().height,
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  initMock();
  return (
    <ThemColors>
      <UserInformationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Header scrollToPosition={scrollToPosition} />

          {/* eslint-disable-next-line no-constant-condition */}
          <AppRoute changeSitePart={changeSitePart} />
        </LocalizationProvider>
      </UserInformationProvider>
    </ThemColors>
  );
};
