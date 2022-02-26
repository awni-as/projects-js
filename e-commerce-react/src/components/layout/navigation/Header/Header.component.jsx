import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../../../../utils/firebase.utils";
import { setCurrentUser } from "../../../../redux/user/user.actions";

import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";

import { ReactComponent as Logo } from "../../../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./Header.styles";

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setCurrentUser());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={handleSignOut}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;
