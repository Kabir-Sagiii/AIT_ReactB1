import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: "",
    image: "",
    description: "",
    rating: {
      rate: 0,
      count: 0,
    },
    category: "",
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch(`http://localhost:3000/products/${id}`);
    let data = await res.json();
    // console.log(data);
    setProduct(data);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={product.image} width={150} height={150} />
      <Heading size="md">{product.title}</Heading>
    </div>
  );
}

export default ProductDetails;
