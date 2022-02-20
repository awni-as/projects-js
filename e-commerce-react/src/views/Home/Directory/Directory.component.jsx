import React from "react";

import "./Directory.styles.scss";

import MenuItem from "../MenuItem/MenuItem.component";
import SECTIONS from "./sections.component";

const sections = SECTIONS;

function Directory() {
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
