import styled from "styled-components";
import { Link } from "react-router-dom";

import AgentImage from "../../../assets/agent.svg";

export const MainNavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  top: 0;

  min-width: 84px;
  max-width: 84px;
  height: 100%;

  background-color: #333d4d;
  color: #d9dbe9;
  font-size: 12px;
`;

export const LogoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 72px;

  &:hover {
    background-color: #3f506c;
  }
`;

export const NavigationItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 78px;

  &:hover {
    background-color: #3f506c;
  }
`;

export const NavItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const NavigationIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
`;

export const NavigationHelpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid grey;
  padding-bottom: 12px;
  margin-top: auto;
  height: 78px;
`;

export const AgentStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  height: 78px;
`;

export const AvatarImage = styled.div`
  background-image: url(${AgentImage});
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;
