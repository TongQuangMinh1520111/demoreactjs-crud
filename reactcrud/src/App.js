
import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register.component";
import Login from "./components/login.component.";
import Header from "./components/header.component";
import Home from "./components/home.component";
import ProductDetail from "./components/products/ProductDetail";
import CartScreen from "./components/cart/CartScreen";
import ListProduct from "./components/products/ListProduct";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProduct />}></Route>
          <Route path="/products/:slug" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
