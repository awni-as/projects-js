import React from "react";
import { useNavigate } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CollectionPreview.styles";

function CollectionPreview(props) {
  const navigate = useNavigate();

  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => navigate(`/shop/${props.title.toLowerCase()}`)}
      >
        {props.title}
      </TitleContainer>
      <PreviewContainer>
        {props.items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              item={item}
            />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
