import React from "react";
import { useSelector } from "react-redux";

import CollectionItem from "../CollectionItem/CollectionItem.component";

import "./CollectionPage.styles.scss";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

function CollectionPage() {
  const collections = useSelector((state) => state.shop.collections);
  console.log(collections);

  const collection = collections.find(
    (collection) => collection.id === COLLECTION_ID_MAP["sneakers"]
  );
  console.log(collection);

  return (
    <div className="collection-page">
      <h2>Collection Page</h2>
    </div>
  );
}

export default CollectionPage;
