import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./CartItem.styles";

const CartItem = (props) => {
  return (
    <CartItemContainer>
      <CartItemImage src={props.imageUrl} alt="item"></CartItemImage>
      <ItemDetailsContainer>
        <span className="name">{props.name}</span>
        <span className="price">
          {props.quantity} x ${props.price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
