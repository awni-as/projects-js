import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionsOverview from "../CollectionsOverview/CollectionsOverview.component";
import CollectionPage from "../CollectionPage/CollectionPage.component";

function ShopPage() {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/:collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
