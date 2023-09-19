import { Box } from "@mui/material";
import "./App.css";
import Header from "./common/Header/Header";
import Home from "./pages/Home/Home";
import ContextProvider from "./hooks/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import DetailView from "./features/product/components/DetailView";
import Cart from "./features/cart/components/Cart";
import { useEffect } from "react";
import setLoadingInterceptor from "./interceptors/loadingInterceptor";
import { useLoading } from "./hooks/useLoading";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";

function App() {
  // const dispatch = useDispatch();
  // const user = useSelector(selectLoggedInUser);
  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchItemsByUserIdAsync());
  //     // we can get req.user by token on backend so no need to give in front-end
  //     dispatch(fetchLoggedInUserAsync());
  //   }
  // }, [dispatch, user]);

  const { showLoading, hideLoading } = useLoading();
  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, [hideLoading, showLoading]);
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
