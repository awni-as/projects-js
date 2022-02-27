import { createSlice } from "@reduxjs/toolkit";

import { addItemToCart } from "../../utils/cart.utils";
import { removeItemFromCart } from "../../utils/cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(state) {
      state.hidden = !state.hidden;
    },
    addItem(state, action) {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeItem(state, action) {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export default cartSlice;
