import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import View from "./pages/View";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const primaryTheme = createTheme({
	palette: {
		primary: {
			main: "#FCFAF9",
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={primaryTheme}>
				<Routes>
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/view" element={<View />} />
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
