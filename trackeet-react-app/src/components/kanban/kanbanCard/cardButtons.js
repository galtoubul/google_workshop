import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { React, useContext } from "react";
import { FormContext } from "../../../containers/forms/formContext/formContext";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";
import { timeLineContent } from "../../forms/timeLine/TimeLine";
import "./cardButtons.scss";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import RedeemIcon from "@mui/icons-material/Redeem";
import HomeIcon from "@mui/icons-material/Home";
import BackpackIcon from "@mui/icons-material/Backpack";

const style = {
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "2px",
  color: "#006d77",
};

export const getTimeLineIcon = (iconName) => {
  switch (iconName) {
    case "LocalGroceryStoreIcon":
      return <LocalGroceryStoreIcon sx={style} />;
    case "FlightTakeoffIcon":
      return <FlightTakeoffIcon sx={style} />;
    case "DeliveryDiningIcon":
      return <DeliveryDiningIcon sx={style} />;
    case "RedeemIcon":
      return <RedeemIcon sx={style} />;
    case "HomeIcon":
      return <HomeIcon sx={style} />;
    case "BackpackIcon":
      return <BackpackIcon sx={style} />;
    default:
      return null;
  }
};
export const CardButtons = (props) => {
  const { loadForm, openDetailedForm, setIsNewForm } = useContext(FormContext);

  const { isLoggedIn } = useUserInformationContext();

  const getIcon = (position) => {
    const timeLineContent1 = timeLineContent.filter((timelineItem) => {
      return timelineItem.position === position;
    });
    return getTimeLineIcon(timeLineContent1[0].icon);
  };

  return (
    <>
      <Box>
        <Tooltip title={props.card.position}>
          {getIcon(props.card.position)}
        </Tooltip>
      </Box>
      <IconButton
        onClick={() => {
          if (isLoggedIn) {
            loadForm(props.card);
            openDetailedForm();
            setIsNewForm(false);
          }
        }}
      >
        <AiOutlineArrowsAlt />
      </IconButton>
    </>
  );
};
