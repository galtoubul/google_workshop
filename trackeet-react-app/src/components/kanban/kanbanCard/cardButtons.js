import Box from "@mui/material/Box";
import { Chip, Tooltip } from "@mui/material";
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
import { AdditionalOptions } from "./additionalOptions";

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

  const onOpenDetailedForm = () => {
    if (isLoggedIn) {
      loadForm(props.card);
      openDetailedForm();
      setIsNewForm(false);
    }
  };

  const getIcon = (position) => {
    if (position === "On The Way") {
      return <BackpackIcon sx={style} />;
    }

    const timeLineContent1 = timeLineContent.filter((timelineItem) => {
      return timelineItem.content === position;
    });

    return getTimeLineIcon(timeLineContent1[0].icon);
  };

  return (
    <>
      <Box>
        <Tooltip title={props.card.additionalPosition}>
          <Chip
            className={`fontSize${isLoggedIn ? "17" : "15"}`}
            sx={{ fontWeight: "0.1px", fontSize: "200px" }}
            icon={getIcon(props.card.additionalPosition)}
            label={props.card.additionalPosition}
            variant="outlined"
            size={"small"}
            color={"primary"}
          />
        </Tooltip>
      </Box>

      <AdditionalOptions
        card={props.card}
        openDetailedForm={onOpenDetailedForm}
      />
    </>
  );
};
