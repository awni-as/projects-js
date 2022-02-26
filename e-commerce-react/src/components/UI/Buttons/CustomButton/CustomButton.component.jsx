import React from "react";

import { CustomButtonContainer } from "./CustomButton.styles";

function CustomButton(props) {
  return (
    <CustomButtonContainer
      isGoogleSignIn={props.isGoogleSignIn}
      inverted={props.inverted}
      type={props.type}
      onClick={props.onClick}
    >
      {props.buttonText}
    </CustomButtonContainer>
  );
}

export default CustomButton;
