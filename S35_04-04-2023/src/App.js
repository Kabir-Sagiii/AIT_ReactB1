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
import Error from "./Components/Routing/Error";
import ProtectPrivate from "./Components/Routing/ProtectPrivate";
import Technology from "./Components/Routing/Technology";
import HTML from "./Components/Routing/HTML";
import CSS from "./Components/Routing/CSS";
import JS from "./Components/Routing/JS";
import React from "./Components/Routing/React";
import ReactJS from "./Components/Routing/React";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {isloggedin ? <Nav /> : null}
      <Routes>
        <Route path="/" element={isloggedin ? <Home /> : <Login />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/profile"
          element={
            <ProtectPrivate>
              <Profile />
            </ProtectPrivate>
          }
        />
        <Route path="/support" element={<Support />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/error" element={<Error />} />
        <Route path="/tech" element={<Technology />}>
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="js" element={<JS />} />
          <Route path="react" element={<ReactJS />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
