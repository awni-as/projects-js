import React from "react";
import { useSelector } from "react-redux";

import { DirectoryMenu } from "./Directory.styles";

import MenuItem from "../MenuItem/MenuItem.component";

const Directory = () => {
  const categories = useSelector((state) => state.directory.sections);

  return (
    <DirectoryMenu>
      {categories.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </DirectoryMenu>
  );
};

export default Directory;
