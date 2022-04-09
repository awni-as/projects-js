import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../../../assets/cart.svg";

import { CartIconContainer, ItemCount } from "./CartIcon.styles";

function CartIcon() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

  return (
    <CartIconContainer onClick={() => dispatch(cartActions.toggleCartHidden())}>
      <ShoppingIcon />
      {itemCount === 0 ? null : (
        <ItemCount className="item-count">{itemCount}</ItemCount>
      )}
    </CartIconContainer>
  );
}

export default CartIcon;
