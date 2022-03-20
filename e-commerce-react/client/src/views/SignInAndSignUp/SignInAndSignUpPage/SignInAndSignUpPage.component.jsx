import React from "react";

import SignIn from "../SignIn/SignIn.component";
import SignUp from "../SignUp/SignUp.component";

import { SignInAndSignUpContainer } from "./SignInAndSignUpPage.styles";

function SignInAndSignUpPage() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
}

export default SignInAndSignUpPage;
