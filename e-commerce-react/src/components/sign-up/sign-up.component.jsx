import React, { useState } from "react";

import FormInput from "../UI/form-input/form-input.component";
import CustomButton from "../UI/custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../utils/firebase.utils";

import "./sign-up.styles.scss";

const initialUserState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [newUser, setNewUser] = useState(initialUserState);

  async function signUpFormSubmissionHandler(event) {
    event.preventDefault();

    if (newUser.password !== newUser.confirmPassword) {
      alert("Passwords Don't Match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      );

      await createUserProfileDocument(user, newUser.displayName);

      setNewUser(initialUserState);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNewUser({ [name]: value });
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={signUpFormSubmissionHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={initialUserState.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="text"
          name="displayName"
          value={initialUserState.email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={initialUserState.password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={initialUserState.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit" buttonText="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
