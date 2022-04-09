import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import FormInput from "../../../components/UI/Forms/FormInput.component";
import CustomButton from "../../../components/UI/Buttons/CustomButton/CustomButton.component";

import { userActions } from "../../../redux/user/user.slice";

import { SignInContainer, Title } from "./SignInPage.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignIn() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  function signInFormSubmissionHandler(event) {
    event.preventDefault();

    dispatch(userActions.emailSignInStart(formFields));
    resetFormFields();
  }
  return (
    <SignInContainer>
      <div className="sign-in">
        <Title>Welcome Back!</Title>

        <form onSubmit={signInFormSubmissionHandler}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            onChange={changeHandler}
            value={email}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            onChange={changeHandler}
            value={password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" buttonText="Sign In to your account" />
          </div>
          <div>
            Don't have an account? <Link to="/register">Sign up now</Link>
          </div>
          <div className="buttons">
            <CustomButton
              type="button"
              onClick={() => dispatch(userActions.googleSignInStart())}
              buttonText="Continue With Google"
              isGoogleSignIn
            />
          </div>
        </form>
      </div>
    </SignInContainer>
  );
}

export default SignIn;
