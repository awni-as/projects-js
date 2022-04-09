import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 32px;
  padding: 0 24px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 38px;
  cursor: pointer;
  display: flex;
  padding-bottom: 16px;
  justify-content: center;
  &:hover {
    color: #00cc9f;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
