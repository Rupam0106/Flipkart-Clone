import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/Status";

const initialState = {
  status: "idle",
  items: [],
  cartLoaded: false,
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async ({ item, alert }) => {
    const response = await addToCartAsync(item);
    alert.success("Item Added to Cart");

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  "cart/fetchItemsByUserId",
  async () => {
    const response = await fetchItemsByUserIdAsync();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status =  STATUS.IDLE;
        state.items.push(action.payload);
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.items = action.payload;
        state.cartLoaded = true;
      })
      .addCase(fetchItemsByUserIdAsync.rejected, (state, action) => {
        state.status =STATUS.IDLE;
        state.cartLoaded = true;
      });
  },
});

export const selectItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartLoaded = (state) => state.cart.cartLoaded;

export default cartSlice.reducer;
