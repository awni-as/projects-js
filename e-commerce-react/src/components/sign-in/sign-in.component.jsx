import React, { useState } from "react";

import "./sign-in.styles.scss";

import FormInput from "../UI/form-input/form-input.component";
import CustomButton from "../UI/custom-button/custom-button.component";

import { signInWithGoogle } from "../../utils/firebase.utils";

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
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={passwordChangeHandler}
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit" buttonText="Sign In" />
          <CustomButton
            onClick={signInWithGoogle}
            buttonText="Sign In With Google"
            isGoogleSignIn
          />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
