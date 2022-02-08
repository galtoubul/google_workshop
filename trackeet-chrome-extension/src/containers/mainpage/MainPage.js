import "./MainPage.css";
import * as React from "react";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { cardAutoCreator } from "../../scripts/cardAutoCreator";
import SendLoader from "../sendLoader/SendLoader";
import { useUserInformationContext } from "../userInformationContext";
import tabGetHostname from "../../scripts/chrome_api/tabGetHostname";

export const MainPage = () => {
  const {
    setFormData,
    showCleanButton,
    isLoading,
    setIsLoading,
    isSendLoading,
    isSendFinish,
    setIsScanSuccess,
    setIsScanNotSuccess,
    setHostname,
  } = useUserInformationContext();

  const setFormInformation = (field) => (fieldData) => {
    const newFormData = {};
    newFormData[field] = fieldData;
    setFormData((oldState) => {
      return { ...oldState, ...newFormData };
    });
  };

  useEffect(async () => {
    let card = {};
    let hostname = "";
    try {
      hostname = await tabGetHostname();
      card = await cardAutoCreator();
      console.log(card);
      setFormData((oldCard) => {
        return { ...oldCard, ...card, order_status: "On The Way" };
      });
      setIsLoading(false);
      showCleanButton(true);
      setIsScanSuccess(true);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      showCleanButton(true);
      //New part
      setHostname(hostname);
      setIsScanNotSuccess(true);
      //End of new part
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
        <>
          <SendLoader />
        </>
      ) : (
        <NonDetailedForm setFormInformation={setFormInformation} />
      )}
    </div>
  );
};
