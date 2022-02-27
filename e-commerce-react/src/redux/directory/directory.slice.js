import { createSlice } from "@reduxjs/toolkit";

import { DIRECTORY_DATA } from "./directory.data";

const initialState = {
  sections: DIRECTORY_DATA,
};

const directorySlice = createSlice({
  name: "directory",
  initialState,
});

export default directorySlice;
