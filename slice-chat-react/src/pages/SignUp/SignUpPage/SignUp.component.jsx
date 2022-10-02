import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../../../components/UI/Forms/FormInput.component";
import Card from "../../../components/UI/Card/Card.component";

import {
  MainContainer,
  PromptBoxOuter,
  Header,
  FormWrapper,
  SignInPrompt,
} from "./SignUp.styles";
import CustomButton from "../../../components/UI/Buttons/CustomButton/CustomButton.component";
import { images } from "../../../constants";

export default function SignUp() {
  return (
    <MainContainer>
      <PromptBoxOuter>
        <Card>
          <Header>
            <images.logo />
          </Header>
          <FormWrapper>
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <FormInput
              label="Full name"
              name="full-name"
              type="text"
              placeholder="Enter your full name"
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <FormInput
              id="file"
              label="Avatar"
              name="avatar"
              type="file"
              style={{ display: "none" }}
            />
            <CustomButton type="submit" buttonText="Create account" />
          </FormWrapper>
        </Card>
        <SignInPrompt>
          <span>
            <span>Have an account? </span>
            <Link to="/login">Sign in</Link>
          </span>
        </SignInPrompt>
      </PromptBoxOuter>
    </MainContainer>
  );
}
