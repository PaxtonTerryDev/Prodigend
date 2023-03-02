import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "user",
  initialState: {
    activePage: "BorrowerDashboard",
  },
  reducers: {
    changePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { changePage } = portalSlice.actions;

export default portalSlice.reducer;
