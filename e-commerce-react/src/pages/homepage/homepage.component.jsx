import React from "react";
import "./homepage.styles.scss";
import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";

function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem />
      </div>
    </div>
  );
}

export default HomePage;
