import React from "react";
import { useSelector } from "react-redux";

import "./Directory.styles.scss";

import MenuItem from "../MenuItem/MenuItem.component";

function Directory() {
  const sections = useSelector((state) => state.directory.sections);

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
