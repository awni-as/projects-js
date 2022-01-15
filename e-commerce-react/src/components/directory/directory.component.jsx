import React, { useState } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

const sections = [
  {
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

function Directory() {
  const [currentSections, setCurrentSections] = useState(sections);

  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageURL={section.imageUrl}
          size={section.size}
        />
      ))}
    </div>
  );
}

export default Directory;
