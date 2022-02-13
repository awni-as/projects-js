import React from "react";
import { useSelector } from "react-redux";

import CustomButton from "../UI/custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown-styles.scss";

function CartDropdown() {
  const cartItemsState = useSelector((state) => state);

  const cartItems = selectCartItems(cartItemsState);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            imageUrl={cartItem.imageUrl}
            quantity={cartItem.quantity}
            price={cartItem.price}
          />
        ))}
      </div>
      <CustomButton type="submit" buttonText="GO TO CHECKOUT" />
    </div>
  );
}

export default CartDropdown;
