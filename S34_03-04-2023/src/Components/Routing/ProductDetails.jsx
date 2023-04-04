import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const [product, setProduct] = useState({
    category: "",
    title: "",
    image: "",
  });
  const { id } = useParams();
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>{product.category} </h2>
      <img src={product.image} width="300" height={300} />
    </div>
  );
}

export default ProductDetails;
