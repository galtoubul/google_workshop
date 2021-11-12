import "./MainPage.css";
import * as React from "react";
import { SelectButton } from "../../components/selectButton/SelectButton";
import Button from "@mui/material/Button";
import { BiLinkExternal } from "react-icons/bi";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import { useState } from "react";

export const MainPage = () => {
  const [addCardPosition, setAddCardPosition] = useState("");

  const openForm = (cardPosition) => {
    setAddCardPosition(cardPosition);
    console.log(cardPosition);
  };

  return (
    <div className="pageContainer">
      <SelectButton openForm={openForm} />
      {addCardPosition && <NonDetailedForm />}
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
