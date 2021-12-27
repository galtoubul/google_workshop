import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

export const ErrorAlert = () => {
  NotificationManager.error("Error message", "Click me!", 1300, () => {});
};
