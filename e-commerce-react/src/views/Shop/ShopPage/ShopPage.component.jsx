import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { shopActions } from "../../../redux/shop/shop.actions";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../../utils/firebase.utils";

function ShopPage(props) {
  const dispatch = useDispatch();
  // const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = db.collection("collections");

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(shopActions.updateCollections(collectionsMap));
      props.onCompleteLoading();
    });
  }, [dispatch, props]);

  return (
    <div className="shop-page">
      <Outlet />
    </div>
  );
}

export default ShopPage;
