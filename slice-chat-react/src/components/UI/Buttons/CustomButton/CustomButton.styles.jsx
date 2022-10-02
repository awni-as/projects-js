import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #49da8a;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 16px;

  &:hover {
    background-color: #41c47c;
  }
`;

const uploadAvatarStyles = css`
  background-color: white;
  border-radius: 6px;
  width: 120px;
  border: 1px solid #c2c8d0;
  height: 34px;

  &:hover {
    border: none;
    outline: none;
    box-shadow: 0 0 0 4px rgba(73, 218, 138, 0.36);
  }
`;

const getButtonStyles = (props) => {
  return props.uploadAvatar ? uploadAvatarStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  min-height: 44px;

  ${getButtonStyles}
`;
