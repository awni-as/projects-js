import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem.component";
import { cartActions } from "../../../../redux/cart/cart.actions";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./CartDropdown.styles";

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  function handleClick() {
    navigate("checkout");
    dispatch(cartActions.toggleCartHidden());
  }

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              imageUrl={cartItem.imageUrl}
              quantity={cartItem.quantity}
              price={cartItem.price}
            />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        type="submit"
        buttonText="Checkout"
        onClick={handleClick}
      />
    </CartDropdownContainer>
  );
}

export default CartDropdown;
