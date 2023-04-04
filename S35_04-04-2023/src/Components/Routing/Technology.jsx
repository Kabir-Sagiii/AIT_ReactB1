import React from "react";
import { Link, Outlet } from "react-router-dom";
var container = {
  width: "1000px",
  boxShadow: "0 0 10px black",
  margin: "50px auto",
  height: "400px",
  display: "flex",
};
function Technology(props) {
  return (
    <div style={container}>
      <div style={{ width: "30%", background: "black", textAlign: "center" }}>
        <div style={{ margin: "50px 0px" }}>
          <Link to="html">HTML</Link>
        </div>
        <div style={{ margin: "50px 0px" }}>
          <Link to="css">CSS</Link>
        </div>
        <div style={{ margin: "50px 0px" }}>
          <Link to="js">JAVASCRIPT</Link>
        </div>
        <div style={{ margin: "50px 0px" }}>
          <Link to="react">REACT</Link>
        </div>
      </div>
      <div style={{ width: "70%", padding: "50px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Technology;
