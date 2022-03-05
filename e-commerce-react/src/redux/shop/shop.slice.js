import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: null,
  isFetching: true,
  errorMessage: undefined,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchCollectionsStart(state) {
      state.isFetching = true;
    },
    fetchCollectionsSuccess(state, action) {
      state.collections = action.payload;
      state.isFetching = false;
    },
    fetchCollectionsFailure(state, action) {
      state.isFetching = false;
      state.errorMessage = action.payload;
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice;
