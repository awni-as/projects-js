import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./utils/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signIn" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
