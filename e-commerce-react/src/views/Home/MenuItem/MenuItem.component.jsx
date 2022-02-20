import React from "react";
import { useNavigate } from "react-router-dom";

import "./MenuItem.styles.scss";

function MenuItem(props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`${props.linkUrl}`);
  }

  return (
    <div className={`menu-item ${props.size}`} onClick={handleClick}>
      <div
        style={{
          backgroundImage: `url(${props.imageURL})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
