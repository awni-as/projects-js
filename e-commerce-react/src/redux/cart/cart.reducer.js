import addItemToCart from "../../utils/cart.utils";

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
  return state;
};

export default cartReducer;
