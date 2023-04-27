import { Button, Heading } from "@chakra-ui/react";
import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, price, rating, id }) {
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
        <Button variant="outline" color="blue">
          Add Cart
        </Button>
      </div>
    </div>
  );
}

export default Card;
