const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "TOGGLE_CART_HIDDEN") {
    return {
      ...state,
      hidden: !state.hidden,
    };
  }
  return state;
};

export default cartReducer;
