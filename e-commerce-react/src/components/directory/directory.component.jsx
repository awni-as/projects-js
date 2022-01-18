import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS from "./sections.component";

const sections = SECTIONS;

function Directory(props) {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageURL={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </div>
  );
}

export default Directory;
