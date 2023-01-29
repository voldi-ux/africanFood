import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { addData } = appDataSlice.actions;

export default appDataSlice.reducer;
