import React from "react";

function Error(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px", color: "red" }}>
      <h1 style={{ fontSize: "60px" }}>Only Admin Can access this Component</h1>
    </div>
  );
}

export default Error;
