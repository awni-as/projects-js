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
    signInSuccess(state, action) {
      state.currentUser = action.payload;
      state.errorMessage = null;
    },
    signInFailure(state, action) {
      state.errorMessage = action.payload;
    },
    checkUserSession(state) {
      state.isLoading = true;
    },
    signOutStart(state) {
      state.isLoading = true;
    },
    signOutSuccess(state) {
      state.currentUser = null;
      state.errorMessage = null;
    },
    signOutFailure(state, action) {
      state.errorMessage = action.payload;
    },
    signUpStart(state) {
      state.isLoading = true;
    },
    signUpSuccess(state, action) {
      state.isLoading = true;
    },
    signUpFailure(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
