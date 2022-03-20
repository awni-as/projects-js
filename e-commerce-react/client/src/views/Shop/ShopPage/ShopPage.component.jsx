import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { fetchCollectionsStartAsync } from "../../../redux/shop/shop.actions";
import { shopActions } from "../../../redux/shop/shop.slice";

function ShopPage() {
  const dispatch = useDispatch();

  // const unsubscribeFromSnapshot = null;

  useEffect(() => {
    dispatch(shopActions.fetchCollectionsStart());
    // const collectionRef = db.collection("collections");

    // const fetchData = async () => {
    //   const response = await fetch(
    //     "https://firestore.googleapis.com/v1/projects/crwn-db-45d79/databases/(default)/documents/collections"
    //   );

    //   if (!response.ok) {
    //     throw new Error("Could not fetch cart data!");
    //   }

    //   const data = await response.json();

    //   return data;
    // };

    // console.log(fetchData());

    // collectionRef.get().then((snapShot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //   dispatch(shopActions.fetchCollectionsStart());
    //   dispatch(shopActions.fetchCollectionsSuccess(collectionsMap));
    // });

    // collectionRef.onSnapshot(async (snapShot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //   dispatch(shopActions.updateCollections(collectionsMap));
    //   props.onCompleteLoading();
    // });
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Outlet />
    </div>
  );
}

export default ShopPage;
