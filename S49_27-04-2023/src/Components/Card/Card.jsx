import { Button, Heading } from "@chakra-ui/react";
import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, price, rating, id, details }) {
  const addToCart = (productdata) => {
    productdata.noOfProducts = 0;
    // console.log(productdata);
    fetch("http://localhost:3000/addtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productdata),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Add Product into the Cart");
      });
  };
  return (
    <div className="cardContainer">
      <img src={image} width="200" height="150" />
      <h3 style={{ fontSize: "28px", fontWeight: "bolder" }}>
        {title.slice(0, 20)}
      </h3>
      <p style={{ fontSize: "20px" }}>${price}</p>

      <div>
        <Link to={`/productdetails/${id}`}>
          {" "}
          <Button variant="outline" color="green" mr="1">
            Details
          </Button>
        </Link>
        <Button
          variant="outline"
          color="blue"
          onClick={() => {
            addToCart(details);
          }}
        >
          Add Cart
        </Button>
      </div>
    </div>
  );
}

export default Card;
