import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../UI/custom-button/custom-button.component";

import "./collection-item.styles.scss";

function CollectionItem(props) {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItem(props.item));
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
      <CustomButton
        onClick={addItemHandler}
        type="button"
        buttonText="Add to cart"
        inverted
      />
    </div>
  );
}

export default CollectionItem;
