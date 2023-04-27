import React from "react";
import "./Home.css";
import { Button, Heading } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function Home(props) {
  return (
    <div>
      <div className="container">
        <div className="box1">
          <div className="box11">
            <Heading size="xl" m="10px">
              Stylish Fashion
            </Heading>
            <p style={{ margin: "5px 0px 35px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              ipsa dolor praesentium inventore exercitationem odit sequi
              temporibus consequatur debitis pariatur.
            </p>
            <Button variant="outline">Shop Now</Button>
          </div>
        </div>
        <div className="box2">Div 2</div>
        <div className="box3">Div 3</div>
      </div>

      <div className="section-2">
        <div
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            padding: "30px",
            color: "white",
          }}
        >
          <CheckIcon color="yellow" />
          &nbsp; Quality Product
        </div>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            padding: "30px",
            color: "white",
          }}
        >
          <i class="bi bi-truck-front" style={{ color: "yellow" }}></i>&nbsp;
          Free Shipping
        </div>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            padding: "30px",
            color: "white",
          }}
        >
          <i class="bi bi-arrow-left-right" style={{ color: "yellow" }}></i>{" "}
          &nbsp; 14-Day Return
        </div>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            padding: "30px",
            color: "white",
          }}
        >
          <i
            class="bi bi-telephone-inbound-fill"
            style={{ color: "yellow" }}
          ></i>
          &nbsp; 24/7 Support
        </div>
      </div>
    </div>
  );
}

export default Home;
