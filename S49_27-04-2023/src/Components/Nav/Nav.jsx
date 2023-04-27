import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { Heading } from "@chakra-ui/react";
// import { Link as ReachLink } from "@reach/router";

var navlinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Products",
    path: "/product",
  },
  {
    title: "Cart",
    path: "/cart",
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
        <Heading size="lg">Shopping Mart</Heading>
      </div>

      <div className="menus">
        {navlinks.map((link) => {
          return (
            <Link style={{ color: " white " }} to={link.path}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
