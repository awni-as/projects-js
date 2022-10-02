import React from "react";

import { FormGroup, Label, Input } from "./FormInput.styles";
import CustomButton from "../Buttons/CustomButton/CustomButton.component";

export default function FormInput({ label, htmlFor, id, ...otherProps }) {
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <Input id={id} {...otherProps} />
      {id === "file" && (
        <CustomButton
          type="button"
          buttonText="Upload"
          onClick={() => document.getElementById("file").click()}
          uploadAvatar
        >
          Browse
        </CustomButton>
      )}
    </FormGroup>
  );
}
