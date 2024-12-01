import React from "react";
import { Link } from "react-router-dom"; 
import "./styles/Menu.css"; 

import cheese from "./styles/images/cheese-pizza.jpg" ;
import pepperoni from "./styles/images/pepperoni-pizza.jpg";
import veggie from "./styles/images/veggie-pizza.png";
import custom from "./styles/images/custom-pizza.jpg"
import drink from "./styles/images/soft-drink.jpg";

const menuItems = [
  { name: "Cheese Pizza", image: cheese, path: "/cheese-pizza"},
  { name: "Pepperoni Pizza", image: pepperoni },
  { name: "Veggie Pizza", image: veggie },
  { name: "Custom Pizza", image: custom, path: "/custom-pizza"},
  { name: "Beverages", image: drink, path: "/drinks"},
];

function Menu() {
  return (
    <div className="menu-container">
      <Link to="/" className="back-arrow">
        ← Back to Home
      </Link>

      <h1 className="menu-title">Our Menu</h1>

      <div className="menu-items">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="menu-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <p className="item-name">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
