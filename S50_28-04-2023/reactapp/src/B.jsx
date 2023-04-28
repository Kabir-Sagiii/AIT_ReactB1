import React from "react";
import { createPortal } from "react-dom";

function B(props) {
  return (
    <div style={{ background: "green", padding: "50px" }}>
      <h2>B Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi
        corporis repellat officia eligendi, molestiae optio minima praesentium
        earum. Natus nemo magnam excepturi amet placeat accusantium nihil,
        maxime ullam maiores asperiores error aliquam iste tenetur veniam beatae
        hic atque nesciunt nostrum illum. Nobis accusantium tempora quisquam
        pariatur id magnam reprehenderit iste quis blanditiis exercitationem.
        Ratione amet cum laudantium veniam quod iste quo voluptatum
        exercitationem quas! Ad, iusto minima. Inventore perferendis aspernatur
        ratione similique vitae optio exercitationem id, libero voluptate rem
        beatae accusantium quos possimus expedita delectus iusto cupiditate odit
        harum dolores! Voluptates dicta ullam necessitatibus recusandae veniam
        nesciunt ipsam temporibus.
      </p>
      {createPortal(
        <h1>I am Outside the div root</h1>,
        document.getElementById("myowndiv")
      )}
    </div>
  );
}

export default B;
