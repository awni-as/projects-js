import React from "react";

import { CustomButtonContainer } from "./CustomButton.styles";

export default function CustomButton({ buttonText, ...otherProps }) {
  return (
    <CustomButtonContainer {...otherProps}>{buttonText}</CustomButtonContainer>
  );
}
