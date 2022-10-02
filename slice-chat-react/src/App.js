import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { GlobalStyle } from "./global.styles.js";

import Navigation from "./components/layout/Navigation/Navigation.component";
import SignInPage from "./pages/SignIn/SignInPage/SignInPage.component";
import SignUp from "./pages/SignUp/SignUpPage/SignUp.component";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
