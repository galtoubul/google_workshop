import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export const ErrorAlert = () => {
  return (
    <NotificationContainer>
      {NotificationManager.error("Error message", "Click me!", 1300, () => {})}
    </NotificationContainer>
  );
};
