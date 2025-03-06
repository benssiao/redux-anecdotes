import { createSlice } from "@reduxjs/toolkit";

const initialState = "";
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reduxSetNotification(state, action) {
      return action.payload;
    },
    reduxRemoveNotification(state, action) {
      return "";
    },
  },
});

export const displayNotification = (notification) => {
  return async (dispatch, getState) => {
    dispatch(reduxSetNotification(notification));
    setTimeout(() => {
      dispatch(reduxRemoveNotification());
    }, 5000);
  };
};
export const { reduxSetNotification, reduxRemoveNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
