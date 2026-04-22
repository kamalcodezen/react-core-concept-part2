import React from "react";

const Link = ({ route }) => {
  return (
    <li className="nav-dropdown">
      <a href={route.path}>
        {route.name}
      </a>
    </li>
  );
};

export default Link;
