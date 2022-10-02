import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  MainContainer,
  PromptBoxOuter,
  Header,
  FormWrapper,
  SSO,
  SignUpPrompt,
} from "./SignInPage.styles";
import Card from "../../../components/UI/Card/Card.component";
import FormInput from "../../../components/UI/Forms/FormInput.component";
import CustomButton from "../../../components/UI/Buttons/CustomButton/CustomButton.component";
import { images } from "../../../constants";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInPage() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetFormFields();
  };

  return (
    <MainContainer>
      <PromptBoxOuter>
        <Card>
          <Header>
            <images.logo />
          </Header>
          <FormWrapper onSubmit={formSubmissionHandler}>
            <FormInput
              label="Email"
              name="email"
              type="email"
              onChange={changeHandler}
              value={email}
              placeholder="Enter your email"
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              onChange={changeHandler}
              value={password}
              placeholder="Enter your password"
              required
            />
            <CustomButton type="submit" buttonText="Continue" />
          </FormWrapper>
          <SSO>Use single sign-on (SSO) instead</SSO>
        </Card>
        <SignUpPrompt>
          <span>
            <span>Don't have an account? </span>
            <Link to="/register"> Sign up</Link>
          </span>
        </SignUpPrompt>
      </PromptBoxOuter>
    </MainContainer>
  );
}
