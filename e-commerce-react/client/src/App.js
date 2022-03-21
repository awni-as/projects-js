import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { GlobalStyle } from "./global.styles";

import CollectionPageContainer from "./views/Shop/CollectionPage/CollectionPage.container";
import Header from "./components/layout/navigation/Header/Header.component";
import CollectionsOverviewContainer from "./views/Shop/CollectionsOverview/CollectionsOverview.container";
import Spinner from "./components/UI/Spinner/Spinner.component";

import HomePage from "./views/Home/HomePage/HomePage.component";
import SignInAndSignUpPage from "./views/SignInAndSignUp/SignInAndSignUpPage/SignInAndSignUpPage.component";
import ContactPage from "./views/Contact/ContactPage.component";
import CheckoutPage from "./views/Checkout/CheckoutPage/CheckoutPage.component";

import { userActions } from "./redux/user/user.slice";

const ShopPage = lazy(() => import("./views/Shop/ShopPage/ShopPage.component"));

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(userActions.checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />}>
            <Route index element={<CollectionsOverviewContainer />} />
            <Route path=":collectionId" element={<CollectionPageContainer />} />
          </Route>
          <Route
            path="/signIn"
            element={
              currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
