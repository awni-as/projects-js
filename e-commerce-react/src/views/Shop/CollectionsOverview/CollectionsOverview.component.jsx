import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

import "./CollectionsOverview.styles.scss";

function CollectionsOverview() {
  const collections = useSelector((state) => state.shop.collections);

  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
}

export default CollectionsOverview;
