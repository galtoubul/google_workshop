import "./MainPage.css";
import * as React from "react";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { cardAutoCreator } from "../../scripts/cardAutoCreator";
import SendLoader from "../sendLoader/SendLoader";
import { useUserInformationContext } from "../userInformationContext";

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSendLoading, setIsSendLoading] = useState(false);
  const [isSendFinish, setIsSendFinish] = useState(false);
  const [isSendError, setIsSendError] = useState(false);
  const { formData, setFormData, showCleanButton } =
    useUserInformationContext();
  // const [formData, setFormData] = useState({
  //   order_name: "",
  //   url: "",
  //   currency: "",
  //   company: "",
  //   order_date: null,
  //   estimated_arrival_date: null,
  //   order_serial_code: "",
  //   order_status: "",
  //   order_price: "",
  // });
  const setFormInformation = (field) => (fieldData) => {
    const newFormData = {};
    newFormData[field] = fieldData;
    setFormData((oldState) => {
      return { ...oldState, ...newFormData };
    });
  };

  const resetForm = () => {
    setFormData({
      order_name: "",
      url: "",
      currency: "", // todo fix the currency enum with the server .,
      company: "",
      order_date: null,
      estimated_arrival_date: null,
      order_serial_code: "",
      order_status: "",
      order_price: "",
    });
  };

  useEffect(async () => {
    let card = {};
    try {
      card = await cardAutoCreator();
      console.log(card);
      setFormData((oldCard) => {
        return { ...oldCard, ...card, order_status: "On The Way" };
      });
      setIsLoading(false);
      showCleanButton(true);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      showCleanButton(true);
    }
  }, []);

  return (
    <div className="pageContainer">
      {isLoading ? (
        <>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "2% 5%" }}
          >
            <CircularProgress value={0} />
          </Box>
        </>
      ) : isSendLoading || isSendFinish ? (
        <SendLoader
          isFinish={isSendFinish}
          loading={isSendLoading}
          setIsFinish={setIsSendFinish}
          isError={isSendError}
          showCleanButton={showCleanButton}
        />
      ) : (
        <NonDetailedForm
          setFormInformation={setFormInformation}
          formData={formData}
          resetForm={resetForm}
          setIsSendLoading={setIsSendLoading}
          setIsSendFinish={setIsSendFinish}
          setIsSendError={setIsSendError}
          showCleanButton={showCleanButton}
        />
      )}
    </div>
  );
};
