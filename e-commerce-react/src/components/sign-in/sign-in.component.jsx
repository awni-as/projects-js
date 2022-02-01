import React, { useState } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function signInFormSubmissionHandler(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={signInFormSubmissionHandler}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          onChange={emailChangeHandler}
          value={email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={passwordChangeHandler}
          value={password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
