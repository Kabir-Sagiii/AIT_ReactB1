import "./App.css";
import { useState, useContext } from "react";
import { AuthContext } from "./Components/Context-API-2/CustomProvider";
import Nav from "./Components/Nav/Nav";
import Api from "./Components/API/Api";
import Image from "./Components/Lifecyle/Image";
import Text from "./Components/Lifecyle/Text";
import Users from "./Components/Lifecyle/Users";
import Timer from "./Components/Timer/Timer";
import Form from "./Components/Forms/Form";
import A from "./Components/Context-API/A";
import Header from "./Components/Header";
import Login from "./Components/Context-API-2/Login";
import Home from "./Components/Context-API-2/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Routing/Products";
import Profile from "./Components/Routing/Profile";
import Support from "./Components/Routing/Support";
import ProductDetails from "./Components/Routing/ProductDetails";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
