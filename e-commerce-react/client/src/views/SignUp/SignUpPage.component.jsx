import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../../components/UI/Forms/FormInput.component";
import CustomButton from "../../components/UI/Buttons/CustomButton/CustomButton.component";

import { SignUp } from "./SignUpPage.styles";

import { userActions } from "../../redux/user/user.slice";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpPage() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  async function signUpFormSubmissionHandler(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Don't Match!");
      return;
    }

    dispatch(userActions.signUpStart(formFields));
    resetFormFields();
  }

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <SignUp>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={signUpFormSubmissionHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={changeHandler}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit" buttonText="Sign Up" />
      </form>
    </SignUp>
  );
}

export default SignUpPage;
