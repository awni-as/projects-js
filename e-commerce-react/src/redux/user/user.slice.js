import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  errorMessage: undefined,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    googleSignInStart(state) {
      state.isLoading = true;
    },
    emailSignInStart(state, action) {
      state.isLoading = true;
    },
    SignInSuccess(state, action) {
      state.currentUser = action.payload;
      state.errorMessage = null;
    },
    SignInFailure(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
