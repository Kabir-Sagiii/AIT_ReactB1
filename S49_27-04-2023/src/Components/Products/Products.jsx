import { useEffect, useState } from "react";
import "./Product.css";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import { Box, Button } from "@chakra-ui/react";

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
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProductsData();
  }, [page]);

  const getProductsData = async () => {
    var res = await fetch(
      `http://localhost:3000/products?_limit=6&_page=${page}&price_gte=300&price_lte=500`
    );
    var data = await res.json();
    setProducts(data);
  };

  const switchPage = (value) => {
    setPage(page + value);
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

        <div id="page">
          <Box
            as="Button"
            disabled={page <= 1}
            variant="outline"
            color="red"
            mr={5}
            onClick={() => {
              switchPage(-1);
            }}
          >
            Previous
          </Box>
          <Box as="button" variant="outline" color="black" mr={5}>
            {page}
          </Box>
          <Box
            disabled={page >= 4}
            as="button"
            variant="outline"
            color="green"
            onClick={() => {
              switchPage(+1);
            }}
          >
            Next
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Products;
