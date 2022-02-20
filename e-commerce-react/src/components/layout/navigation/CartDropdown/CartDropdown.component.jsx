import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../../UI/CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";
import { toggleCartHidden } from "../../../../redux/cart/cart.actions";

import "./CartDropdown.styles.scss";

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  function handleClick() {
    navigate("checkout");
    dispatch(toggleCartHidden());
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
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
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        type="submit"
        buttonText="GO TO CHECKOUT"
        onClick={handleClick}
      />
    </div>
  );
}

export default CartDropdown;
