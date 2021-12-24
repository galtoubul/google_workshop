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

export const timeLineContent = [
  {
    icon: "LocalGroceryStoreIcon",
    content: "Wishlist",
    isFirst: true,
    isLast: false,
    isChoose: false,
    position: "Wishlist",
  },
  {
    icon: "BackpackIcon",
    content: "Paid",
    isFirst: false,
    isLast: false,
    isChoose: false,
    position: "On The Way",
  },
  {
    icon: "FlightTakeoffIcon",
    content: "In transit",
    isFirst: false,
    isLast: false,
    isChoose: false,
    position: "On The Way",
  },
  {
    icon: "DeliveryDiningIcon",
    content: "Out for delivery",
    isFirst: false,
    isLast: false,
    isChoose: false,
    position: "On The Way",
  },
  {
    icon: "RedeemIcon",
    content: "Pickup point",
    isFirst: false,
    isLast: false,
    isChoose: false,
    position: "On The Way",
  },
  {
    icon: "HomeIcon",
    content: "Arrived",
    isFirst: false,
    isLast: true,
    isChoose: false,
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
          {getTimeLineIcon(timeLineState.icon)}
        </TimeLineItem>
      );
    });
  };

  return <Timeline position="alternate">{getTimeLineItems()}</Timeline>;
};
