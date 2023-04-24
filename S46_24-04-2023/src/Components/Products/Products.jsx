import React from "react";
import "./Product.css";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
var cardData = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png",
    title: "Stylish T-Shirts",
    price: 1000,
    rating: 4.5,
  },
];
var checkboxList = [
  {
    title: "All Price",
    price: 1000,
  },
  {
    title: "$0 - $100",
    price: 250,
  },
  {
    title: "$100 - $200",
    price: 245,
  },
  {
    title: "$200 - $300",
    price: 150,
  },
  {
    title: "$300 - $400",
    price: 246,
  },
  {
    title: "$400 - $500",
    price: 145,
  },
];

var checkboxListColor = [
  {
    title: "All Color",
    price: 1000,
  },
  {
    title: "All Color",
    price: 1000,
  },
  {
    title: "All Color",
    price: 1000,
  },
  {
    title: "All Color",
    price: 1000,
  },
  {
    title: "All Color",
    price: 1000,
  },
  {
    title: "All Color",
    price: 1000,
  },
];

var checkboxListSize = [
  {
    title: "All Size",
    price: 1000,
  },
  {
    title: "All Size",
    price: 1000,
  },
  {
    title: "All Size",
    price: 1000,
  },
  {
    title: "All Size",
    price: 1000,
  },
  {
    title: "All Size",
    price: 1000,
  },
  {
    title: "All Size",
    price: 1000,
  },
];

function Products(props) {
  return (
    <div className="productsContainer">
      <div className="productsLeftPanel">
        <Filter filterTitle="Filter By Price" checkboxList={checkboxList} />

        <Filter
          filterTitle="Filter By Color"
          checkboxList={checkboxListColor}
        />

        <Filter filterTitle="Filter By Size" checkboxList={checkboxListSize} />
      </div>

      <div className="productsRightPanel">
        {cardData.map((card) => {
          return (
            <Card
              image={card.image}
              title={card.title}
              price={card.price}
              rating={card.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
