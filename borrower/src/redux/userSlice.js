import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    createUser: false,
    userInfo: {
      firstName: "Pingus",
      lastName: "Bingus",
      email: "",
    },
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
    addUser: (state) => {
      state.createUser = true;
    },
    updateFirstName: (state, action) => {
      state.userInfo.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.userInfo.lastName = action.payload;
    },
    updateEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
  },
});

export const {
  login,
  logout,
  addUser,
  updateFirstName,
  updateLastName,
  updateEmail,
} = userSlice.actions;

export default userSlice.reducer;
