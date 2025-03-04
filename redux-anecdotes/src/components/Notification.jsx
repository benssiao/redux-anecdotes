import { useSelector } from "react-redux";
import {
  reduxSetNotification,
  reduxRemoveNotification,
} from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  let style;
  if (notification !== "") {
    style = {
      border: "solid",
      padding: 10,
      borderWidth: 1,
    };
  } else {
    style = {
      display: "none",
    };
  }

  return <div style={style}>{notification}</div>;
};

export default Notification;
