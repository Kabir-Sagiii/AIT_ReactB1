import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
import Text from "./Components/Text";
import Products from "./Components/Products";
import Nav from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/redux"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <Input />
              <Text />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
