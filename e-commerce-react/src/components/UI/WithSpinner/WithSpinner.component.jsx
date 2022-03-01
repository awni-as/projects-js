import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

const WithSpinner = (WrappedComponent) => {
  function Spinner(props) {
    return props.isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent onCompleteLoading={props.onCompleteLoading} />
    );
  }
  return Spinner;
};

export default WithSpinner;
