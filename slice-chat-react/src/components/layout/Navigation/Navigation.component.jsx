import React from "react";
import { Link } from "react-router-dom";

import {
  MainNavigationContainer,
  LogoWrapper,
  NavigationItems,
  NavigationItem,
  NavItemLink,
  NavigationIcon,
  NavigationHelpWrapper,
  AgentStatusWrapper,
  AvatarImage,
  Image,
} from "./Navigation.styles";
import { images } from "../../../constants";

const NavItems = [
  {
    label: "conversations",
    path: "/conversations",
    iconSRC: images.conversations,
  },
  { label: "people", path: "/contacts", iconSRC: images.people },
  { label: "analytics", path: "/analytics", iconSRC: images.analytics },
];

export default function Navigation() {
  return (
    <MainNavigationContainer>
      <Link to="/">
        <LogoWrapper>
          <images.plainLogo style={{ width: "32.5px", height: "36px" }} />
        </LogoWrapper>
      </Link>
      <NavigationItems>
        {NavItems.map((NavItem) => (
          <NavigationItem>
            <NavItemLink to={NavItem.path}>
              <NavItem.iconSRC style={{ color: "#D9DBE9" }} />
              <span style={{ color: "#D9DBE9" }}>
                {NavItem.label.charAt(0).toUpperCase() + NavItem.label.slice(1)}
              </span>
            </NavItemLink>
          </NavigationItem>
        ))}
      </NavigationItems>
      <NavigationHelpWrapper>
        <Link to="/settings">
          <images.settingsIcon style={{ width: "24px", height: "24px" }} />
        </Link>
      </NavigationHelpWrapper>
      <AgentStatusWrapper>
        <AvatarImage />
      </AgentStatusWrapper>
    </MainNavigationContainer>
  );
}
