import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../../../../redux/user/user.actions";

import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";

import { ReactComponent as Logo } from "../../../../assets/slice.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  SignInLink,
  SignUpLink,
} from "./Navigation.styles";

function Navigation() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(userActions.signOutStart());
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        <CartIcon />
        {currentUser ? (
          <OptionDiv onClick={handleSignOut}>Sign out</OptionDiv>
        ) : (
          <SignInLink to="/login">Log In</SignInLink>
        )}
        {currentUser ? null : <SignUpLink to="/register">Sign Up</SignUpLink>}
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default Navigation;
