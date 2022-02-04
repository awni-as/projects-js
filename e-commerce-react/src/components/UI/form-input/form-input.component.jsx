import React from "react";

import "./form-input.styles.scss";

function FormInput(props) {
  return (
    <div className="group">
      <label
        className={` form-input-label ${props.value.length ? "shrink" : ""}`}
      >
        {props.label}
      </label>
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
