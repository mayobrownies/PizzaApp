import React, { useState } from "react";
import { Link } from "react-router-dom";
import drinkImage from "./styles/images/soft-drink.jpg";
import "./styles/Drinks.css";

function Drink({ addToCart }) {
  const [size, setSize] = useState("medium");
  const [drinkType, setDrinkType] = useState("Coca-Cola");

  const availableDrinks = [
    { name: "Coca-Cola", price: { small: 1.99, medium: 2.49, large: 2.99 } },
    { name: "Pepsi", price: { small: 1.99, medium: 2.49, large: 2.99 } },
    { name: "Sprite", price: { small: 1.99, medium: 2.49, large: 2.99 } },
    { name: "Fanta", price: { small: 1.99, medium: 2.49, large: 2.99 } },
    { name: "Water", price: { small: 1.49, medium: 1.99, large: 2.49 } },
  ];

  const handleSizeChange = (sizeOption) => {
    setSize(sizeOption);
  };

  const handleDrinkTypeChange = (drinkName) => {
    setDrinkType(drinkName);
  };

  const getPrice = () => {
    const selectedDrink = availableDrinks.find((drink) => drink.name === drinkType);
    return selectedDrink ? selectedDrink.price[size].toFixed(2) : "0.00";
  };

  const handleSubmit = () => {
    const order = {
      name: drinkType,
      size,
      price: getPrice(),
      type: "drink",
    };
    addToCart(order);
    console.log("Order added to cart:", order);
  };

  return (
    <div className="drink-container">
      <Link to="/menu" className="back-arrow">
        ← Back to Menu
      </Link>

      <h1 className="drink-title">Select Your Drink</h1>

      <div className="info-container">
        <div className="drink-image-container">
          <img src={drinkImage} alt="Soft Drink" className="drink-image" />
        </div>

        <div className="options">
          <p className="customize-text">Choose Your Drink:</p>
          <div className="drink-selection">
            {availableDrinks.map((drink) => (
              <button key={drink.name} className={`drink-button ${drinkType === drink.name ? "selected" : ""}`} onClick={() => handleDrinkTypeChange(drink.name)}>
                {drink.name}
              </button>
            ))}
          </div>

          <p className="customize-text">Select Size:</p>
          <div className="option size-buttons">
            <button className={`size-button ${size === "small" ? "active" : ""}`} onClick={() => handleSizeChange("small")}>
              Small
            </button>
            <button className={`size-button ${size === "medium" ? "active" : ""}`} onClick={() => handleSizeChange("medium")}>
              Medium
            </button>
            <button className={`size-button ${size === "large" ? "active" : ""}`} onClick={() => handleSizeChange("large")}>
              Large
            </button>
          </div>

          <div className="summary">
            <h3>Your Selection:</h3>
            <p>Drink: {drinkType || "None selected"}</p>
            <p>Size: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
            <p>Price: ${getPrice()}</p>
          </div>

          <button className="submit-button" onClick={handleSubmit}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drink;
