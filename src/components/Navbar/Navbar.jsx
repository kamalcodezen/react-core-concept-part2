import React, { useState } from "react";
import "./Navbar.css";
import Link from "./Link";
import { Menu, MenuIcon } from "lucide-react";
import { X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const link = navLinks.map((route, ind) => (
    <Link key={ind} route={route}></Link>
  ));

  return (
    <nav className="nav-container">

      <div className="nav-logo">
        <span onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
      </span>
        <ul className={`nav-dropdown ${open ? "dropdown-link": " dropdown-link-2"}`}>
          { link}
          </ul>

        <h2>Country</h2>
      </div>

      {/* 3rd way */}
      <ul className="nav-link">{link}</ul>

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
    </nav>
  );
};

export default Navbar;
