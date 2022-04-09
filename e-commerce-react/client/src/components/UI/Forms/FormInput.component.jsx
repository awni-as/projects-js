import React from "react";

import { FormInputLabel, Input, Group } from "./FormInput.styles";

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      {{ label } && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      <Input {...otherProps}></Input>
    </Group>
  );
}

export default FormInput;
