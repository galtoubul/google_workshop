import Typography from "@mui/material/Typography";
import { KanbanProvider } from "../../../utlis/hooks/kanbanContext/kanbanContext";
import { toCards } from "../../../utlis/api/utils/utils";
import { Kanban } from "../../../components/kanban/kanban";
import * as React from "react";
import "./demo.scss";
import Button from "@mui/material/Button";
import { useIsPhoneContext } from "../../../utlis/hooks/phone/isPhoneContext";

const getDemo = () => {
  return (
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
  );
};

export const Demo = (props) => {
  const { isIpad } = useIsPhoneContext();

  return (
    <body className="bodyWithDemoContainer" id={"Demo"}>
      <div className={"contentContainer"}>
        <div className={"loginTextContainer"}>
          <Typography
            sx={{
              textAlign: isIpad ? "center" : undefined,
              marginBottom: "24px",
              width: isIpad ? "240px" : "410px",
            }}
            variant={isIpad ? "h6" : "h5"}
          >
            All your orders <br /> in one single place
          </Typography>
          <Typography
            sx={{
              textAlign: isIpad ? "center" : undefined,
              marginTop: !isIpad && "24px",
              width: isIpad ? "240px" : "410px",
            }}
            variant={isIpad ? "h7" : "h6"}
          >
            Our easy to use, universal tracking features make it a breeze to
            track all your orders. Trackeet automatically arranges orders as
            well as instantly updates you when each order arrives.
          </Typography>
          <Button
            onClick={props.openLoggingModal}
            sx={{ marginTop: "24px" }}
            variant="contained"
          >
            Get started
          </Button>
        </div>
        {getDemo()}
      </div>
    </body>
  );
};
