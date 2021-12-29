import "./MainPage.css";
import * as React from "react";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { cardAutoCreator } from "../../scripts/cardAutoCreator";

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
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
  const setFormInformation = (field) => (fieldData) => {
    const newFormData = {};
    newFormData[field] = fieldData;
    setFormData((oldState) => {
      return { ...oldState, ...newFormData };
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
    } catch (e) {
      console.log(e);
      setIsLoading(false);
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
      ) : (
        <NonDetailedForm
          setFormInformation={setFormInformation}
          formData={formData}
        />
      )}
    </div>
  );
};
