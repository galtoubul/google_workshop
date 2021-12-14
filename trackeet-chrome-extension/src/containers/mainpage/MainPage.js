import "./MainPage.css";
import * as React from "react";
import { SelectButton } from "../../components/selectButton/SelectButton";
import Button from "@mui/material/Button";
import { BiScan, BiLinkExternal } from "react-icons/bi";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import { useState } from "react";
import cardAutoCreator from "../../scripts/cardAutoCreator";

export const ADD_NEW_ORDER = "Add new order";

export const MainPage = () => {
  const [addCardPosition, setAddCardPosition] = useState(ADD_NEW_ORDER);

  const openForm = (cardPosition) => {
    setAddCardPosition(cardPosition);
  };

  const closeForm = (cardPosition) => {
    setAddCardPosition(ADD_NEW_ORDER);
  };

  return (
    <div className="pageContainer">
      <SelectButton openForm={openForm} addCardPosition={addCardPosition} />
      {addCardPosition !== ADD_NEW_ORDER && (
        <NonDetailedForm closeForm={closeForm} />
      )}
      <Button
        variant="outlined"
        sx={{ margin: "2% 5%", display: "flex", justifyContent: "center" }}
        endIcon={<BiScan />}
        onClick={async () => {
          // eslint-disable-next-line no-var,vars-on-top
          var x = await cardAutoCreator();
          console.log(x);
        }}
      >
        Scan
      </Button>
      <Button
        variant="outlined"
        sx={{ margin: "2% 5%", display: "flex", justifyContent: "center" }}
        endIcon={<BiLinkExternal />}
      >
        Trackeet
      </Button>
    </div>
  );
};
