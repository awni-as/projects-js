import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem.component";

import "./CollectionPage.styles.scss";

const collectionsArray = ["womens", "hats", "jackets", "sneakers", "mens"];

function CollectionPage() {
  const params = useParams();
  const collectionId = params.collectionId;

  const collections = useSelector((state) => state.shop.collections);
  const collection = collections[collectionsArray.indexOf(collectionId)];
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
