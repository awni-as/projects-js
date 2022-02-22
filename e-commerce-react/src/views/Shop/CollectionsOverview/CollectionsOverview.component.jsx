import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

import "./CollectionsOverview.styles.scss";

function CollectionsOverview() {
  const collections = useSelector((state) => state.shop.collections);

  return (
    <div className="collections-overview">
      {Object.keys(collections).map((collection) => (
        <CollectionPreview
          key={collections[collection].id}
          title={collections[collection].title}
          items={collections[collection].items}
        />
      ))}
    </div>
  );
}

export default CollectionsOverview;
