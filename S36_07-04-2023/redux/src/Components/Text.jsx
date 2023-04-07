import React from "react";
import { useSelector } from "react-redux";

function Text(props) {
  const data = useSelector((storedata) => {
    return storedata;
  });

  return (
    <div>
      <h2 style={{ color: "red" }}>Text Component</h2>
      <p>
        Store Data:{" "}
        <span style={{ color: "green", fontSize: "32px" }}>{data}</span>
      </p>
    </div>
  );
}

export default Text;
