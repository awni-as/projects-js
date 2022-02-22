import React, { useState } from "react";

import FormInput from "../../../components/UI/Forms/FormInput.component";
import CustomButton from "../../../components/UI/Buttons/CustomButton/CustomButton.component";

import { auth, createUserProfileDocument } from "../../../utils/firebase.utils";

import "./SignUp.styles.scss";

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

  function nameChangeHandler(event) {
    setNewUser({ ...newUser, displayName: event.target.value });
  }

  function emailChangeHandler(event) {
    setNewUser({ ...newUser, email: event.target.value });
  }

  function passwordChangeHandler(event) {
    setNewUser({ ...newUser, password: event.target.value });
  }

  function confirmPasswordChangeHandler(event) {
    setNewUser({ ...newUser, confirmPassword: event.target.value });
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={signUpFormSubmissionHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={newUser.displayName}
          onChange={nameChangeHandler}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="text"
          name="displayName"
          value={newUser.email}
          onChange={emailChangeHandler}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={newUser.password}
          onChange={passwordChangeHandler}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={confirmPasswordChangeHandler}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit" buttonText="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
