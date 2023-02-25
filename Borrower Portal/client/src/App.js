import SignUp from "./components/scenes/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/scenes/SignIn/SignIn";
import BorrowerDashboard from "./components/scenes/BorrowerDashboard/BorrowerDashboard";
import { useSelector } from "react-redux";

function App() {
	return (
		<>
			<Routes>
				<Route element={<SignIn />} path="/" />
				<Route element={<SignUp />} path="/signup" />
				<Route element={<BorrowerDashboard />} path="/dashboard" />
			</Routes>
		</>
	);
}

export default App;
