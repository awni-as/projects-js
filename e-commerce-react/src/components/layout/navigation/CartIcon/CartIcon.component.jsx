import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

function CartIcon() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

  return (
    <div
      className="cart-icon"
      onClick={() => dispatch(cartActions.toggleCartHidden())}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
