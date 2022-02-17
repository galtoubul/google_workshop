import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import { TimeLineItem } from "./TimeLineItem";
import "./TimeLine.scss";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import RedeemIcon from "@mui/icons-material/Redeem";
import HomeIcon from "@mui/icons-material/Home";
import BackpackIcon from "@mui/icons-material/Backpack";
import { Tooltip } from "@mui/material";
import { useIsPhoneContext } from "../../../utlis/hooks/phone/isPhoneContext";

export const timeLineContent = [
  {
    icon: "LocalGroceryStoreIcon",
    content: "Wishlist",
    isFirst: true,
    isLast: false,
    isChoose: false,
    description: "Wishlist",
    position: "Wishlist",
  },
  {
    icon: "BackpackIcon",
    content: "Paid",
    isFirst: false,
    isLast: false,
    isChoose: false,
    description: "Paid",
    position: "On The Way",
  },
  {
    icon: "FlightTakeoffIcon",
    content: "Transit",
    isFirst: false,
    isLast: false,
    isChoose: false,
    description:
      "Courier has picked up the package from the shipper, the package is on the way to destination",
    position: "On The Way",
  },
  // {
  //   icon: "DeliveryDiningIcon",
  //   content: "Out for delivery",
  //   isFirst: false,
  //   isLast: false,
  //   isChoose: false,
  //   position: "On The Way",
  // },
  {
    icon: "RedeemIcon",
    content: "Pick Up",
    isFirst: false,
    isLast: false,
    isChoose: false,
    description:
      "Courier is about to deliver the package, or the package is waiting for the addressee to pick up",
    position: "On The Way",
  },
  {
    icon: "HomeIcon",
    content: "Arrived",
    isFirst: false,
    isLast: true,
    isChoose: false,
    description: "The package was delivered successfully",
    position: "Arrived",
  },
];

export const getTimeLineIcon = (iconName) => {
  switch (iconName) {
    case "LocalGroceryStoreIcon":
      return <LocalGroceryStoreIcon className={"icon"} />;
    case "FlightTakeoffIcon":
      return <FlightTakeoffIcon className={"icon"} />;
    case "DeliveryDiningIcon":
      return <DeliveryDiningIcon className={"icon"} />;
    case "RedeemIcon":
      return <RedeemIcon className={"icon"} />;
    case "HomeIcon":
      return <HomeIcon className={"icon"} />;
    case "BackpackIcon":
      return <BackpackIcon className={"icon"} />;
    default:
      return null;
  }
};

export const TimeLine = (props) => {
  const { isIpadForForm } = useIsPhoneContext();

  const getTimeLineItems = () => {
    return timeLineContent.map((timeLineState, index) => {
      return (
        <TimeLineItem
          key={index}
          timeLineState={{
            ...timeLineState,
            isChoose:
              timeLineState.content === props.position ||
              (timeLineState.position === props.position &&
                timeLineState.content === "Paid"),
          }}
        >
          <Tooltip key={index} title={timeLineState.description}>
            {getTimeLineIcon(timeLineState.icon)}
          </Tooltip>
        </TimeLineItem>
      );
    });
  };

  return (
    <Timeline
      sx={
        isIpadForForm
          ? {
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "350px ",
            }
          : {
              display: "flex",
              position: "absolute",
              top: "42%",
              left: "83.5%",
              transform: "translate(-50%, -50%)",
              width: "350px ",
            }
      }
      position="right"
    >
      {getTimeLineItems()}
    </Timeline>
  );
};
