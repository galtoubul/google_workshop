import "./LoginPage.scss";
import Typography from "@mui/material/Typography";
import { Airplain } from "./img/airplain";
import * as React from "react";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { ContactUs } from "./ConatctUs";
import { LoginLogo } from "../../assets/logo/LoginLogo";
import { Kanban } from "../../components/kanban/kanban";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";
import { toCards } from "../../utlis/api/utils/utils";
import { LoginModal } from "./logInModal";

export const LoginPage = (props) => {
  return (
    <div>
      <header className="headerLogin">
        <div className={"loginTextContainer"}>
          <Typography
            sx={{ marginBottom: "24px", textAlign: "center" }}
            variant="h5"
          >
            All-in-one international tracking for <br />
            any post office tracking
          </Typography>
          <Typography
            sx={{ marginTop: "24px", textAlign: "center" }}
            variant="h6"
          >
            This track my package universal tracking tool was created to make it
            easier than ever before to track all of your international packages
            by tracking number lookup.
          </Typography>

          <div className={"logInRowContainer"}>
            <LoginModal />
            {/*<Button color={"secondary"} variant="outlined">*/}
            {/*  sign Up*/}
            {/*</Button>*/}
            {/*<Button onClick={props.login} color={"primary"} variant="contained">*/}
            {/*  Log in*/}
            {/*</Button>*/}
          </div>
        </div>
        <div className={"airPlain"}>
          <Airplain></Airplain>
        </div>
      </header>

      <body className="bodyWithDemoContainer">
        <div className={"demoBody"}>
          <div className={"loginTextContainer"}>
            <Typography sx={{ marginBottom: "24px" }} variant="h5">
              All-in-one international tracking for <br />
              any post office tracking
            </Typography>
            <Typography sx={{ marginTop: "24px" }} variant="h6">
              This track my package universal tracking tool was created to make
              it easier than ever before to track all of your international
              packages by tracking number lookup.
            </Typography>
          </div>
          <div className="demoPage">
            <KanbanProvider
              startKanbanState={{
                demo: true,
                onTheWayCards: toCards({
                  cards: [
                    {
                      order_name: "Computer",
                      order_url:
                        "https://shoesonline.co.il/product/unisex-converse-all-s",
                      currency: "ILS",
                      company: "Ebay",
                      order_date: "11/11/2021",
                      estimated_arrival_date: "01/01/2022",
                      order_serial_code: "3123",
                      notes: "",
                      id: "2",
                      timeline_position: "On The Way",
                      currency_amount: 120,
                    },
                  ],
                }),
                // eslint-disable-next-line no-undef
                arrivedCards: toCards({
                  cards: [
                    {
                      order_name: "New shirt",
                      order_url: "",
                      currency: "ILS",
                      company: "Asos",
                      order_date: "12/10/2020",
                      estimated_arrival_date: "01/01/2022",
                      order_serial_code: "13123",
                      notes: "",
                      card_id: "3",
                      timeline_position: "Arrived",
                      currencyAmount: 120,
                    },
                    {
                      order_name: "Refrigerator",
                      url: "",
                      currency: "ILS",
                      company: "AliExpress",
                      order_date: "12/10/2020",
                      estimated_arrival_date: "03/12/2020",
                      order_serial_code: "",
                      notes: "",
                      card_id: "4",
                      timeline_position: "Arrived",
                      currency_amount: 120,
                    },
                  ],
                }),
                wishListCards: toCards({
                  cards: [
                    {
                      order_name: "New shoes",
                      order_url:
                        "https://shoesonline.co.il/product/unisex-converse-all-s",
                      currency: "ILS",
                      company: "Amazon",
                      order_date: "11/10/2020",
                      estimated_arrival_date: "11/11/2020",
                      order_serial_code: "3444234",
                      notes: "",
                      card_id: "1",
                      timeline_position: "Wishlist",
                      currency_amount: 120,
                    },
                  ],
                }),
              }}
            >
              <Kanban setNewCardPosition={() => {}}></Kanban>
            </KanbanProvider>
          </div>
        </div>
      </body>
      <div className={"contactUsContainer"}>
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
          <ContactUs />
        </div>
        <div className={"loginLogoContainer"}>
          <LoginLogo className={{ LoginLogo }} />
        </div>
      </div>
    </div>
  );
};
