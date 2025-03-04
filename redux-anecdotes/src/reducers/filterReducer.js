import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilterString(state, actions) {
      return actions.payload;
    },
  },
});

export const { updateFilterString } = filterSlice.actions;
export default filterSlice.reducer;
