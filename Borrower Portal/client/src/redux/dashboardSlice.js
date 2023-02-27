import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    drawerOpen: false,
  },
  reducers: {
    toggleDrawer: (state, action) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const { toggleDrawer } = dashboardSlice.actions;

export default dashboardSlice.reducer;
