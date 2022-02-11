import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../../utils/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  console.log(currentUser);

  const logout = () => {
    auth.signOut();
    dispatch(setCurrentUser({ currentUser: null }));
    console.log("Logging out...");
    console.log(currentUser);
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={logout}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
