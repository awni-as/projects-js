import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItem.styles";

const MenuItem = ({ category }) => {
  const { imageUrl, title, linkUrl, size } = category;

  let navigate = useNavigate();

  function handleClick() {
    navigate(`${linkUrl}`);
  }

  return (
    <MenuItemContainer className={`menu-item ${size}`} onClick={handleClick}>
      <BackgroundImageContainer
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <ContentTitle>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
