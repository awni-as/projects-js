import React, { useState } from "react";

import SHOP_DATA from "../shop.data";

import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

function ShopPage() {
  const [collections] = useState(SHOP_DATA);

  return (
    <div>
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

export default ShopPage;
