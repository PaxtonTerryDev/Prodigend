import SignUp from "./components/scenes/SignUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/scenes/SignIn";
import { useSelector } from "react-redux";
import Portal from "./components/scenes/Portal";

function App() {
  return (
    <>
      <Routes>
        <Route element={<SignIn />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Portal />} path="/portal" />
      </Routes>
    </>
  );
}

export default App;
