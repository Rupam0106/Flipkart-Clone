import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/Status";
import { getAllProduct, getProductById } from "./productService";

const initialState = {
  status: "",
  products: [],
  selectedProduct: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct:(state)=>{
      state.selectedProduct = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

//fetching product using build in thunk on toolkit
export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const data = await getAllProduct();
  return data;
});

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const data = await getProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return data;
  }
);

export const { clearSelectedProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state) => state.products.selectedProduct?.product;
export const selectProductListStatus = (state) => state.products.status;
export default productSlice.reducer;
