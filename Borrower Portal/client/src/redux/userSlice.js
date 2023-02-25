import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		loggedIn: false,
		createUser: false,
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
	},
});

export const { login, logout, addUser } = userSlice.actions;

export default userSlice.reducer;
