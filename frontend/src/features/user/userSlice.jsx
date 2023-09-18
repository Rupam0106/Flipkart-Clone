import { authenticateLogin } from "./userService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/Status";

const initialState = {
  status: "idle",
  userInfo: null, // this info will be used in case of detailed user info, while auth will
  // only be used for loggedInUser id etc checks
};

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (email,password) => {
    const response = await authenticateLogin(email,password);
    console.log(response)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        // this info can be different or more from logged-in User info
        state.userInfo = action.payload;
      })
      .addCase(fetchLoggedInUserAsync.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserInfoStatus = (state) => state.user.status;

export default userSlice.reducer;
