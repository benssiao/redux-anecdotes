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
      position: "absolute",
      left: "50%",
      top: "5%",
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
