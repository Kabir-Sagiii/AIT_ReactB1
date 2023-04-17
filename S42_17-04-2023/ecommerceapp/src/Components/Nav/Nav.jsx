import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

var navlinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/product",
  },
  {
    title: "login",
    path: "/login",
  },
];

function Nav(props) {
  return (
    <div className="navStyle">
      <div className="Title">
        <h2>Ecommerce Shop</h2>
      </div>

      <div className="menus">
        {navlinks.map((link) => {
          return (
            <Link className="linkStyle" to={link.path}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
