import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { shopActions } from "../../../redux/shop/shop.slice";

function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shopActions.fetchCollectionsStart());
  }, [dispatch]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default ShopPage;
