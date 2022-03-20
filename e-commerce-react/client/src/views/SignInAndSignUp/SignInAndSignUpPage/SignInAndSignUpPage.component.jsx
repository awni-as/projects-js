import React from "react";

import "./SignInAndSignUpPage.styles.scss";

import SignIn from "../SignIn/SignIn.component";
import SignUp from "../SignUp/SignUp.component";

function SignInAndSignUpPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpPage;
