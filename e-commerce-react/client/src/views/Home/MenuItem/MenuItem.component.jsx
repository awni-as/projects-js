import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItem.styles";

function MenuItem(props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`${props.linkUrl}`);
  }

  return (
    <MenuItemContainer
      className={`menu-item ${props.size}`}
      onClick={handleClick}
    >
      <BackgroundImageContainer
        className="background-image"
        style={{
          backgroundImage: `url(${props.imageURL})`,
        }}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <ContentTitle>{props.title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default MenuItem;
