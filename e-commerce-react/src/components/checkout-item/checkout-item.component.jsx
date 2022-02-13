import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = (props) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={props.imageUrl} />
      </div>
      <span className="name">{props.name}</span>
      <span className="quantity">{props.quantity}</span>
      <span className="price">{props.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
