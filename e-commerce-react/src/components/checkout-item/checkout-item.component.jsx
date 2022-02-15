import React from "react";

import { useDispatch } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { addItem } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = (props) => {
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(props.cartItem));
  };

  const addItemHandler = () => {
    dispatch(addItem(props.cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(props.cartItem));
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
