<<<<<<< Updated upstream
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

import CheesePizza from "./components/CheesePizza";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="cheese-pizza" element={<CheesePizza/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
=======
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

import CheesePizza from "./components/CheesePizza";
import CustomPizza from "./components/CustomPizza";
import Drinks from "./components/Drinks";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  function addToCart(item) {
    setCart((prevCart) => {
      return [...prevCart, { ...item, quantity: 1 }];
    });
  }

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item !== itemToRemove));
  };

  function clearCart(){
    setCart([]);
  }
  // update when adding new items
  const showBanner = 
  location.pathname === "/cheese-pizza" || 
  location.pathname === "/custom-pizza" || 
  location.pathname === "/drinks" || 
  location.pathname === "/menu";

  return (
    <>
      {showBanner && <Banner cart={cart} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cheese-pizza" element={<CheesePizza addToCart={addToCart}/>} />
        <Route path="/custom-pizza" element={<CustomPizza addToCart={addToCart}/>} />
        <Route path="/drinks" element={<Drinks addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} removeFromCart={removeFromCart}/>} />
      </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
>>>>>>> Stashed changes
