import { configureStore } from "@reduxjs/toolkit";
import portalSlice from "./portalSlice";
import userSlice from "./userSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    portal: portalSlice,
  },
});
