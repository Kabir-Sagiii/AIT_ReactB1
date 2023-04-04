import { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "300px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
};
function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "green" }}>Products Component</h2>
      <p>
        Lorem ipsum dolor sit ad voluptatem labore ipsum, eaque ipsam unde, ab
        doloribus impedit error ea beatae ducimus voluptas placeat! Illo
        blanditiis facere ipsa sunt harum officia dolores beatae reiciendis,
        doloremque nihil culpa sapiente ab consequuntur. Atque vitae eaque
        voluptatem voluptas facilis minus quis velit, asperiores earum
        doloremque et, dignissimos porro. Fugiat minus pariatur incidunt numquam
        minima porro, odio eum facere enim officia laudantium illo natus
        sapiente ipsum similique obcaecati odit placeat nesciunt architecto
        corporis, ipsa delectus accusamus ipsam id? Voluptatum ratione
        architecto modi pariatur veritatis laborum nobis dolor quaerat,
        inventore corrupti expedita. Nemo quo, corporis et at ipsam soluta quis
        sequi molestiae enim autem, ratione accusantium assumenda nisi porro.
        Molestiae quae iusto odio nesciunt minima dolore repellat, iste possimus
        nam unde, eligendi saepe cupiditate voluptatibus corrupti quos qui
        laboriosam eaque? Hic officiis ratione quaerat corporis atque explicabo
        libero suscipit tempore quo? Dolor qui officiis odio fuga, obcaecati
        impedit voluptas pariatur placeat fugit nisi optio deleniti ab nulla
        atque voluptatem corporis temporibus ipsa! Error, obcaecati odio minus
        hic sequi id quasi maxime totam at sapiente. Consequuntur magnam
        voluptas numquam error, doloribus veritatis sapiente nam quidem cumque
        unde rem voluptatem dolorem esse laborum voluptatum dolore repudiandae
        aperiam sint architecto. Asperiores, illum. Ab obcaecati voluptatibus
        saepe commodi quaerat ullam, odio sunt doloremque? Non provident ea
        molestiae architecto aut porro praesentium aliquid vitae accusamus sunt
        ipsam unde beatae quidem in, ab eveniet at voluptate nisi? Adipisci ut
        eaque amet suscipit? Maxime nisi temporibus similique doloremque cum
        laborum id! Assumenda facere iusto natus reprehenderit voluptatum vel
        tenetur ipsam illum exercitationem, eos repudiandae dolorum, aliquid ea
        obcaecati voluptates nesciunt sapiente? Aliquam autem officiis possimus,
        quibusdam doloremque consequatur nisi quae doloribus vitae quasi
        voluptas, aspernatur veniam eos dignissimos temporibus incidunt?
        Reiciendis iste autem at ipsam fugiat praesentium iusto, maiores,
        nostrum amet deleniti ullam libero nobis harum omnis tenetur similique.
        Molestias laudantium inventore totam numquam, ipsam facere!
      </p>
      {products.length > 0 ? (
        <div className="flexCard">
          {products.map((ele, index) => {
            return (
              <div style={cardStyle}>
                <img src={ele.image} width="100%" height={250} />
                <h3>{ele.title}</h3>
                <p>$ {ele.price}</p>
                <Link to={`/productdetails/${ele.id}`}>
                  <button>Product Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center" }}>No Products</h2>
      )}
    </div>
  );
}

export default Products;
