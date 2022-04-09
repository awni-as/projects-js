import styled, { keyframes } from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const bounceAnimation = keyframes`
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-4px); }
    100% { transform: translateY(0); }
`;

export const ItemCount = styled.span`
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  background: #00cc9f;
  border-radius: 999999px;
  bottom: 25px;
  color: #ffffff;
  display: inline-block;
  position: absolute;
  right: 0px;
  left: 60%;
  text-align: center;
  min-width: 2em;
  white-space: nowrap;
  margin: 0;
  animation-name: ${bounceAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transition: opacity 0.5s ease-in 0s;
`;
