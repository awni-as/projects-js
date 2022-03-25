import React from "react";
import { useSelector } from "react-redux";

import { DirectoryMenu } from "./Directory.styles";

import MenuItem from "../MenuItem/MenuItem.component";

function Directory() {
  const sections = useSelector((state) => state.directory.sections);

  return (
    <DirectoryMenu>
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageURL={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </DirectoryMenu>
  );
}

export default Directory;
