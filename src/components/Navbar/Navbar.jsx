import React from "react";
import "./Navbar.css";
import Link from "./Link";
const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      {/* 3rd way */}
      <ul className="nav-link">
        {navLinks.map((route,ind) => (
          <Link key={ind} route={route}></Link>
        ))}
      </ul>

      {/* 2nd way */}
      {/* <ul className="nav-link">
        {navLinks.map((route, ind) => (
          <li key={ind}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* basic way */}
      {/* <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul> */}
    </div>
  );
};

export default Navbar;
