import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import HomePage from "./views/Home/HomePage/HomePage.component";
import ShopPage from "./views/Shop/ShopPage/ShopPage.component";
import SignInAndSignUpPage from "./views/SignInAndSignUp/SignInAndSignUpPage/SignInAndSignUpPage.component";
import CheckoutPage from "./views/Checkout/CheckoutPage/CheckoutPage.component";
import CollectionPageContainer from "./views/Shop/CollectionPage/CollectionPage.container";
import Header from "./components/layout/navigation/Header/Header.component";
import CollectionsOverviewContainer from "./views/Shop/CollectionsOverview/CollectionsOverview.container";
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from "./utils/firebase.utils";
import { userActions } from "./redux/user/user.actions";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  // const collectionsArray = useSelector((state) => state.shop.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // (user) => dispatch(setCurrentUser(user))

        userRef.onSnapshot((snapShot) => {
          dispatch(
            userActions.setCurrentUser({ id: snapShot.id, ...snapShot.data() })
          );
        });
      } else {
        dispatch(userActions.setCurrentUser());
      }
    });

    // addCollectionAndDocuments(
    //   "collections",
    //   Object.keys(collectionsArray).map(
    //     (keyName, i) => collectionsArray[keyName]
    //   )
    // );

    return () => {
      unsubscribeFromAuth();
    };
    // }, [dispatch, collectionsArray]);
  }, [dispatch]);

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
