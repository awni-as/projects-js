import { addItemToCart } from "../../utils/cart.utils";
import { removeItemFromCart } from "../../utils/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "TOGGLE_CART_HIDDEN") {
    return {
      ...state,
      hidden: !state.hidden,
    };
  }
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload),
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload),
    };
  }
  if (action.type === "CLEAR_ITEM_FROM_CART") {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      ),
    };
  }
  return state;
};

export default cartReducer;
