import React from "react";
import "./menu-item.styles.scss";

function MenuItem(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imageURL})`,
      }}
      className={`menu-item ${props.size}`}
    >
      <div className="content">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
