import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { GlobalStyle } from "./global.styles";
import "./App.css";

import CollectionPageContainer from "./views/Shop/CollectionPage/CollectionPage.container";
import Navigation from "./components/layout/navigation/Navigation/Navigation.component";
import CollectionsOverviewContainer from "./views/Shop/CollectionsOverview/CollectionsOverview.container";
import Spinner from "./components/UI/Spinner/Spinner.component";
import ErrorBoundary from "./components/UI/ErrorBoundary/ErrorBoundary.component";

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
    <div className="app-layout">
      <GlobalStyle />
      <div className="app-layout app-layout-inner">
        <Navigation />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />}>
                <Route index element={<CollectionsOverviewContainer />} />
                <Route
                  path=":collectionId"
                  element={<CollectionPageContainer />}
                />
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
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;