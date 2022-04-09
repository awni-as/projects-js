import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 48px 56px;
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  background-color: #ffffff;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const SignInLink = styled(Link)`
  ${OptionContainerStyles}
  background-color: white;
  color: #00cc9f;
  border: 1px solid #00cc9f;
  border-radius: 6px;
  margin-right: 20px;
  margin-left: 20px;
  &:hover {
    background-color: #00cc9f;
    color: white;
  }
`;

export const SignUpLink = styled(Link)`
  ${OptionContainerStyles}
  background-color: #00cc9f;
  color: white;
  border: none;
  border-radius: 6px;
  margin-right: 8px;
  &:hover {
    background-color: #009977;
    color: white;
  }
`;
