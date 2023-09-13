import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ContextProvider from "./context/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import DetailView from "./pages/ItemDetails/DetailView";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </ContextProvider>
      <ToastContainer position="top-right" />
      <ToastContainer />
    </>
  );
}

export default App;
