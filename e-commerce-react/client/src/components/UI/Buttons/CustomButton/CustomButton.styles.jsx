import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #00cc9f;
  color: white;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: #009977;
    color: white;
    border: 1px solid #009977;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #00cc9f;
  border: 1px solid #00cc9f;
  border-radius: 6px;
  &:hover {
    background-color: #00cc9f;
    color: white;
    border: none;
    border-radius: 6px;
  }
`;

const googleSignInStyles = css`
  align-items: center;
  background-color: white;
  color: #4e4b66;
  border-radius: 6px;
  bottom: 0px;
  box-shadow: rgba(71, 88, 114, 0.08) 0px 2px 2px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
