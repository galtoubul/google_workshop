import "./MainPage.css";
import * as React from "react";
import { SelectButton } from "../../components/selectButton/SelectButton";
import Button from "@mui/material/Button";
import { BiLinkExternal } from "react-icons/bi";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import { useState } from "react";
// import Extractor_Amazon from "../../scripts/Extractor_Amazon";

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
        endIcon={<BiLinkExternal />}
        onClick={() => {
          // eslint-disable-next-line no-undef
          chrome.tabs.executeScript(null, {
            file: "Extractor_Amazon.js",
          });
        }}
      >
        Scan Habibi
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

// chrome.tabs.query(null, function (tabs) {
//     // eslint-disable-next-line prefer-destructuring
//     const tab = tabs[0];
//     // eslint-disable-next-line no-undef
//     chrome.tabs.executeScript(
//         tab.id,
//         {
//             code: 'alert("hi!")',
//         },
//         (win) => {
//             console.log(win);
//         }
//     );
// });
