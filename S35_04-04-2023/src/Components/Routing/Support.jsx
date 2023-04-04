import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Support(props) {
  const [searchparams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchparams.get("name"));
    console.log(searchparams.get("gender"));
  }, []);
  // searchparams = {name:sagar,gender:male}
  //searchparams.get('name')
  return (
    <div style={{ color: "blue" }}>
      <h2>Support Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        quos aspernatur mollitia nesciunt asperiores fugit quam maxime eius
        deserunt quia ad voluptatem labore ipsum, eaque ipsam unde, ab doloribus
        impedit error ea beatae ducimus voluptas placeat! Illo blanditiis facere
        ipsa sunt harum officia dolores beatae reiciendis, doloremque nihil
        culpa sapiente ab consequuntur. Atque vitae eaque voluptatem voluptas
        facilis minus quis velit, asperiores earum doloremque et, dignissimos
        porro. Fugiat minus pariatur incidunt numquam minima porro, odio eum
        facere enim officia laudantium illo natus sapiente ipsum similique
        obcaecati odit placeat nesciunt architecto corporis, ipsa delectus
        accusamus ipsam id? Voluptatum ratione architecto modi pariatur
        veritatis laborum nobis dolor quaerat, inventore corrupti expedita. Nemo
        quo, corporis et at ipsam soluta quis sequi molestiae enim autem,
        ratione accusantium assumenda nisi porro. Molestiae quae iusto odio
        nesciunt minima dolore repellat, iste possimus nam unde, eligendi saepe
        cupiditate voluptatibus corrupti quos qui laboriosam eaque? Hic officiis
        ratione quaerat corporis atque explicabo libero suscipit tempore quo?
        Dolor qui officiis odio fuga, obcaecati impedit voluptas pariatur
        placeat fugit nisi optio deleniti ab nulla atque voluptatem corporis
        temporibus ipsa! Error, obcaecati odio minus hic sequi id quasi maxime
        totam at sapiente. Consequuntur magnam voluptas numquam error, doloribus
        veritatis sapiente nam quidem cumque unde rem voluptatem dolorem esse
        laborum voluptatum dolore repudiandae commodi repellendus sint
      </p>
      <button
        onClick={() => {
          setSearchParams({ city: "delhi", name: "Kabir" });
        }}
      >
        Set New Params
      </button>
    </div>
  );
}

export default Support;
