/* eslint-disable no-var */

import "./MainPage.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { BiScan } from "react-icons/bi";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import cardAutoCreator from "../../scripts/cardAutoCreator";
//import { useUserInformationContext } from "../userInformationContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
//import autoFill from "../../scripts/autoFill";

export const MainPage = () => {
  //const { api } = useUserInformationContext();
  //const [orderStatus, setOrderStatus] = useState(null);
  const [orderName, setOrderName] = useState(null);
  // const [orderSerialCode, setOrderSerialCode] = useState(null);
  // const [estimatedArrivingDate, setEstimatedArrivingDate] = useState(null);

  return (
    <div className="pageContainer">
      {
        <>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "2% 5%" }}
          >
            <CircularProgress />
          </Box>
          <Typography>Auto scanning in process</Typography>
        </>
      }
      <NonDetailedForm
        orderName={orderName}
        setOrderName={setOrderName}
        order_status={null}
        order_serial_code={null}
        estimated_arriving_date={null}
      />
      <Button
        variant="contained"
        size={"small"}
        sx={{ margin: "2% 5%", display: "flex", justifyContent: "center" }}
        endIcon={<BiScan />}
        onClick={async () => {
          // eslint-disable-next-line no-var,vars-on-top
          var x = await cardAutoCreator();
          // await api.addCard(x);
          console.log(x);
        }}
      >
        Auto Scan
      </Button>
      <Button
        variant="contained"
        size={"small"}
        sx={{ margin: "2% 5%", display: "flex", justifyContent: "center" }}
        endIcon={<BiScan />}
        onClick={async () => {
          var card = {};
          try {
            card = await cardAutoCreator();
          } catch (e) {
            console.error(e);
          }

          console.log(card);
          setOrderName(card.order_name);
          console.log(orderName);
        }}
      >
        Auto Fill
      </Button>
    </div>
  );
};
