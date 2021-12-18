import "./MainPage.css";
import * as React from "react";
import { SelectButton } from "../../components/selectButton/SelectButton";
import Button from "@mui/material/Button";
//import { Snackbar } from "@mui/material";
import { BiScan } from "react-icons/bi";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import { useState } from "react";
import cardAutoCreator from "../../scripts/cardAutoCreator";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// eslint-disable-next-line func-style
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href=""
        onClick={() => {
          // eslint-disable-next-line no-undef
          chrome.tabs.create(
            { active: true, url: "http://trackeet.co" },
            () => {}
          );
        }}
      >
        Trackeet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
      {addCardPosition === ADD_NEW_ORDER ? (
        <Button
          variant="contained"
          size={"small"}
          sx={{ margin: "2% 5%", display: "flex", justifyContent: "center" }}
          endIcon={<BiScan />}
          onClick={async () => {
            // eslint-disable-next-line no-var,vars-on-top
            var x = await cardAutoCreator();
            console.log(x);
          }}
        >
          Auto Scan
        </Button>
      ) : null}
      {/*<Snackbar open={true} />*/}
      <Copyright sx={{ mt: 0, mb: 0 }} />
    </div>
  );
};
