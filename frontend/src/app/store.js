import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/product/ProductSlice";
import CartReducer from "../features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
  },
});
