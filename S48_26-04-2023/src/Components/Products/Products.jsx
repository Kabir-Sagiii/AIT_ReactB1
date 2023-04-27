import { useEffect, useState } from "react";
import "./Product.css";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    var res = await fetch("http://localhost:3000/products");
    var data = await res.json();
    setProducts(data);
  };

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
        {products.length > 0 &&
          products.map((card) => {
            return (
              <Card
                id={card.id}
                image={card.image}
                title={card.title.slice(0, 15)}
                price={card.price}
                rating={card.rating.rate}
                details={card}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Products;
