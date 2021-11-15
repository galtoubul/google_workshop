import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const TimeLineItem = (props) => {
  const itemColor = props.timeLineState.isChoose ? "secondary" : "primary";
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ width: "10px" }}></TimelineOppositeContent>
      <TimelineSeparator>
        {props.timeLineState.isFirst || (
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        )}

        <TimelineDot color={itemColor}>{props.children}</TimelineDot>
        {props.timeLineState.isLast || (
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        )}
      </TimelineSeparator>
      <TimelineContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "15px",
        }}
      >
        <Typography component="span">{props.timeLineState.content}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
