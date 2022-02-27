import React from "react";

import { useDispatch } from "react-redux";

import { cartActions } from "../../../redux/cart/cart.actions";

import "./CheckoutItem.styles.scss";

const CheckoutItem = (props) => {
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    dispatch(cartActions.clearItemFromCart(props.cartItem));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItem(props.cartItem));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.cartItem));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={props.imageUrl} />
      </div>
      <span className="name">{props.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{props.quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{props.price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
