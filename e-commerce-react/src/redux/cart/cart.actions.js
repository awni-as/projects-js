import { TOGGLE_CART_HIDDEN } from "./cart.types";
import { ADD_ITEM } from "./cart.types";
import { CLEAR_ITEM_FROM_CART } from "./cart.types";
import { REMOVE_ITEM } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
