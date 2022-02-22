import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import HomePage from "./views/Home/HomePage/HomePage.component";
import ShopPage from "./views/Shop/ShopPage/ShopPage.component";
import SignInAndSignUpPage from "./views/SignInAndSignUp/SignInAndSignUpPage/SignInAndSignUpPage.component";
import CheckoutPage from "./views/Checkout/CheckoutPage/CheckoutPage.component";
import CollectionPage from "./views/Shop/CollectionPage/CollectionPage.component";
import Header from "./components/layout/navigation/Header/Header.component";
import CollectionsOverview from "./views/Shop/CollectionsOverview/CollectionsOverview.component";
import { auth, createUserProfileDocument } from "./utils/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // (user) => dispatch(setCurrentUser(user))

        userRef.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      } else {
        dispatch(setCurrentUser());
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route index element={<CollectionsOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
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
