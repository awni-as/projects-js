import { TOGGLE_CART_HIDDEN } from "./cart.types";
import { ADD_ITEM } from "./cart.types";

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
