import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./user/user.slice";
import cartSlice from "./cart/cart.slice";
import directorySlice from "./directory/directory.slice";
import shopSlice from "./shop/shop.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  directory: directorySlice.reducer,
  shop: shopSlice.reducer,
});

export default persistReducer(persistConfig, rootReducer);
