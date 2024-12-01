import React, { useState } from "react";
import { Link } from "react-router-dom";
import cheesePizzaImage from "./styles/images/custom-pizza.jpg";
import "./styles/CustomPizza.css";

function CustomPizza({addToCart}) {
  const [crustType, setCrustType] = useState("medium");
  const [size, setSize] = useState("medium");
  const [toppings, setToppings] = useState([]);

  const availableToppings = [
    { name: "Mushrooms", price: 1.5 },
    { name: "Pepperoni", price: 2.0 },
    { name: "Olives", price: 1.2 },
    { name: "Green Peppers", price: 1.0 },
    { name: "Extra Cheese", price: 1.5 },
    { name: "Onions", price: 1.0 },
  ];

  const handleCrustChange = (type) => {
    setCrustType(type);
  };

  const handleSizeChange = (sizeOption) => {
    setSize(sizeOption);
  };

  const toggleTopping = (topping) => {
    setToppings((prevToppings) => {
      if (prevToppings.includes(topping)) {
        return prevToppings.filter((item) => item !== topping);
      } else {
        return [...prevToppings, topping];
      }
    });
  };

  const getPriceForSize = () => {
    switch (size) {
      case "small":
        return 7.99;
      case "medium":
        return 9.99;
      case "large":
        return 12.99;
      default:
        return 0;
    }
  };

  const getTotalPrice = () => {
    const toppingsPrice = toppings.reduce((total, topping) => {
      const toppingPrice = availableToppings.find((item) => item.name === topping)?.price || 0;
      return total + toppingPrice;
    }, 0);

    return (getPriceForSize() + toppingsPrice).toFixed(2);
  };

  const handleSubmit = () => {
    const order = {
      name: "Custom Pizza",
      toppings: toppings.length > 0 ? toppings : "None",
      crustType,
      size,
      price: getTotalPrice(),
      type: "pizza",
    };
    addToCart(order);
    console.log("Order added to cart", order);
  };

  return (
    <div className="custom-pizza-container">
      <Link to="/menu" className="back-arrow">
        ← Back to Menu
      </Link>

      <h1 className="pizza-title">Custom Pizza</h1>

      <div className="info-container">
        <div className="pizza-image-container">
          <img src={cheesePizzaImage} alt="Custom Pizza" className="pizza-image" />
        </div>

        <div className="options">
          <p className="customize-text">Customize Your Order!</p>

          <div className="option crust-buttons">
            <p>Choose Crust Type:</p>
            <button className={`crust-button ${crustType === "thin" ? "active" : ""}`} onClick={() => handleCrustChange("thin")}>
              Thin Crust
            </button>
            <button className={`crust-button ${crustType === "medium" ? "active" : ""}`} onClick={() => handleCrustChange("medium")}>
              Medium Crust
            </button>
          </div>

          <div className="option size-buttons">
            <p>Choose Size:</p>
            <button className={`size-button ${size === "small" ? "active" : ""}`} onClick={() => handleSizeChange("small")}>
              Small - $7.99
            </button>
            <button className={`size-button ${size === "medium" ? "active" : ""}`} onClick={() => handleSizeChange("medium")}>
              Medium - $9.99
            </button>
            <button className={`size-button ${size === "large" ? "active" : ""}`} onClick={() => handleSizeChange("large")}>
              Large - $12.99
            </button>
          </div>

          <div>
            <p>Select Toppings:</p>
            <div className="topping-selection">
              {availableToppings.map((topping) => (
                <button key={topping.name} className={`topping-button ${toppings.includes(topping.name) ? "selected" : ""}`} onClick={() => toggleTopping(topping.name)}>
                  {topping.name} (${topping.price.toFixed(2)})
                </button>
              ))}
            </div>
          </div>

          <div className="summary">
            <h3>Your Selection:</h3>
            <p>Crust Type: {crustType === "thin" ? "Thin Crust" : "Medium Crust"}</p>
            <p>Size: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
            <p>Toppings: {toppings.length > 0 ? toppings.join(", ") : "None"}</p>
            <p>Price: ${getTotalPrice()}</p>
          </div>

          <button className="submit-button" onClick={handleSubmit}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomPizza;