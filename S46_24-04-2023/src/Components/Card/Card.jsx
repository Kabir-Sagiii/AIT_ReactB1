import { Button, Heading } from "@chakra-ui/react";
import "./Card.css";
import React from "react";

function Card({ image, title, price, rating }) {
  return (
    <div className="cardContainer">
      <img src={image} width="250" height={250} />
      <Heading size="sm">{title}</Heading>
      <p>${price}</p>
      <h4>{rating}</h4>
      <Button variant="outline" color="green" mr="1">
        Details
      </Button>
      <Button variant="outline" color="blue">
        Add Cart
      </Button>
    </div>
  );
}

export default Card;
