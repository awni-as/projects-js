import React from "react";

import CustomButton from "../UI/custom-button/custom-button.component";

import "./cart-dropdown-styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton type="submit" buttonText="GO TO CHECKOUT" />
    </div>
  );
}

export default CartDropdown;
