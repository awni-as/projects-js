import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./CollectionItem.styles";

function CollectionItem(props) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem(props.item));
  };

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={props.imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{props.name} </NameContainer>
        <PriceContainer>{props.price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        onClick={addItemHandler}
        type="button"
        buttonText="Add to cart"
        inverted
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}

export default CollectionItem;
