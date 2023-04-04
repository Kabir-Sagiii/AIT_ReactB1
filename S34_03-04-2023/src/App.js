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
      </Routes>
    </div>
  );
}

export default App;
