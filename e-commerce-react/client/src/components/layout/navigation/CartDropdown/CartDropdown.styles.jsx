import styled from "styled-components";
import CustomButton from "../../../UI/Buttons/CustomButton/CustomButton.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #00cc9f;
  background-color: white;
  top: 90px;
  right: 150px;
  z-index: 5;
  border-radius: 12px;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
