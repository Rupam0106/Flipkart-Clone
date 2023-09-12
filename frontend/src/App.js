import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ContextProvider from "./context/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Home />
        </Box>
      </ContextProvider>
      <ToastContainer position="top-right" />
      <ToastContainer />
    </>
  );
}

export default App;
