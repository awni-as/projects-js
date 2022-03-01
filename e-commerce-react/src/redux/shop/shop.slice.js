import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateCollections(state, action) {
      state.collections = action.payload;
    },
  },
});

export default shopSlice;
