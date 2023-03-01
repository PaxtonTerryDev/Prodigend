import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";

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
        <NavigationBar />
        <Sidebar />
      </ThemeProvider>
    </>
  );
}

export default App;
