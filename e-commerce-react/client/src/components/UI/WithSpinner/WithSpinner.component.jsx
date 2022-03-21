import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../Spinner/Spinner.component";

const WithSpinner = (WrappedComponent) => {
  function LoadingSpinner() {
    const isFetching = useSelector((state) => state.shop.isFetching);

    return isFetching ? <Spinner /> : <WrappedComponent />;
  }
  return LoadingSpinner;
};

export default WithSpinner;
