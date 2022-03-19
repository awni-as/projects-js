import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import HomePage from "./views/Home/HomePage/HomePage.component";
import ShopPage from "./views/Shop/ShopPage/ShopPage.component";
import SignInAndSignUpPage from "./views/SignInAndSignUp/SignInAndSignUpPage/SignInAndSignUpPage.component";
import CheckoutPage from "./views/Checkout/CheckoutPage/CheckoutPage.component";
import CollectionPageContainer from "./views/Shop/CollectionPage/CollectionPage.container";
import Header from "./components/layout/navigation/Header/Header.component";
import CollectionsOverviewContainer from "./views/Shop/CollectionsOverview/CollectionsOverview.container";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route index element={<CollectionsOverviewContainer />} />
          <Route path=":collectionId" element={<CollectionPageContainer />} />
        </Route>
        <Route
          path="/signIn"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
