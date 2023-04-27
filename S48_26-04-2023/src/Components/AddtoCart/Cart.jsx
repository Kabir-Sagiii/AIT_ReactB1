import { Box, Button, Center, Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Cart(props) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3000/addtocart")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCart(data);
      });
  };

  const removeProduct = (id) => {
    fetch(`http://localhost:3000/addtocart/${id}`, {
      method: "DELETE",
      "Content-Type": "application/json",
    })
      .then((res) => res.json())
      .then(() => {
        // alert("Removed Product From Cart");
        getData();
      });
  };
  return (
    <Container>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => {
            return (
              <div key={product.id}>
                <img src={product.image} width={200} height={200} />
                <br />
                <Button
                  color="red"
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  Remove
                </Button>
                <Button color="green">Proceed</Button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Center>
            <Box mt="100px">
              <Heading color="red">No Products in the Cart</Heading>
            </Box>
          </Center>
        </div>
      )}
    </Container>
  );
}

export default Cart;
