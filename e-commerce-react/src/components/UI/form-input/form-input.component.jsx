import React from "react";

import "./form-input.styles.scss";

function FormInput(props) {
  return (
    <div className="group">
      {props.label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {props.label}
        </label>
      ) : null}
      <input
        className="form-input"
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
}

export default FormInput;
