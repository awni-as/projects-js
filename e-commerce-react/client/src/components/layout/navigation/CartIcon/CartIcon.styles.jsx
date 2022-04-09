import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
`;
