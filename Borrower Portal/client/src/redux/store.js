import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboardSlice";
import userSlice from "./userSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    dashboard: dashboardSlice,
  },
});
