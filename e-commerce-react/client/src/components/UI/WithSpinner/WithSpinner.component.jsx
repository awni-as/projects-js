import React from "react";
import { useSelector } from "react-redux";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

const WithSpinner = (WrappedComponent) => {
  function Spinner() {
    const isFetching = useSelector((state) => state.shop.isFetching);

    return isFetching ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent />
    );
  }
  return Spinner;
};

export default WithSpinner;
