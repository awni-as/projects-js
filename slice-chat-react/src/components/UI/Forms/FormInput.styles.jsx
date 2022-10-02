import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

export const Input = styled.input`
  border-radius: 6px;
  height: 44px;
  padding: 8px 16px;
  border: 1px solid #c2c8d0;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 4px rgba(73, 218, 138, 0.36);
  }
`;
