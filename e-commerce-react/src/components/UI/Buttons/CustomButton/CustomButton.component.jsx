import React from "react";

import "./CustomButton.styles.scss";

function CustomButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.inverted ? "inverted" : ""}${
        props.isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
    >
      {props.buttonText}
    </button>
  );
}

export default CustomButton;
