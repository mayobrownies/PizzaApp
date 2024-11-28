import React, { useState } from "react";
import { Link } from "react-router-dom";
import cheesePizzaImage from "./styles/images/cheese-pizza.jpg";
import "./styles/CheesePizza.css";

function CheesePizza() {
  const [extraCheese, setExtraCheese] = useState(false);
  const [crustType, setCrustType] = useState("medium");
  const [size, setSize] = useState("medium");

  const handleExtraCheeseChange = () => {
    setExtraCheese((prevState) => !prevState);
  };

  const handleCrustChange = (type) => {
    setCrustType(type);
  };

  const handleSizeChange = (sizeOption) => {
    setSize(sizeOption);
  };

  const handleSubmit = () => {
    console.log("Saving pizza order:", {
      extraCheese,
      crustType,
      size,
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
    let basePrice = getPriceForSize();
    if (extraCheese) {
      basePrice += 0.99;
    }
    return basePrice.toFixed(2);
  };

  return (
    <div className="cheese-pizza-container">
      <Link to="/menu" className="back-arrow">
        ← Back to Menu
      </Link>

      <h1 className="pizza-title">Cheese Pizza</h1>

      <div className="info-container">
        <div className="pizza-image-container">
          <img src={cheesePizzaImage} alt="Cheese Pizza" className="pizza-image" />
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
            <button className={`extra-cheese-button ${extraCheese ? "active" : ""}`} onClick={() => handleExtraCheeseChange()}>
              Extra Cheese $0.99
            </button>
          </div>

          <div className="summary">
            <h3>Your Selection:</h3>
            <p>{extraCheese ? "Extra Cheese: Yes" : "Extra Cheese: No"}</p>
            <p>Crust Type: {crustType === "thin" ? "Thin Crust" : "Medium Crust"}</p>
            <p>Size: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
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

export default CheesePizza;