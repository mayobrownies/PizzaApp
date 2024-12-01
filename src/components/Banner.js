import React from "react";
import { Link } from "react-router-dom"
import logo from "./styles/images/logo.png"
import cartIcon from "./styles/images/cart-icon.png"
import "./styles/Banner.css"

function Banner({ cart }) {
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="banner">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo"/>
      </Link>
      <Link to="/cart" className="cart-link">
        <img src={cartIcon} alt="Cart" className="cart-icon" />
        <span className="cart-count">{getTotalItems()}</span>
      </Link>
    </div>
  );
}

export default Banner;