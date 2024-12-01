import React from "react";
import { Link } from "react-router-dom";
import "./styles/Cart.css";
import axios from "axios";

function Cart({ cart, clearCart, removeFromCart }) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => (total + parseFloat(item.price)) || 0, 0).toFixed(2);
  };

  const handleSubmit = async () => {
    if (cart.length === 0){
      console.log("empty cart");
      return;
    }

    try {
      const orders = cart.map(item => ({
        name: item.name,
        toppings: item.toppings || [],
        crustType: item.crustType || "",
        size: item.size,
        price: item.price,
        type: item.type,
      }));
  
      console.log("Submitting orders:", orders);
      
      const response = await axios.post('http://localhost:8000/api/orders', { orders });
      
      console.log('Orders submitted successfully:', response.data);
      
      clearCart();
    } catch (error) {
      console.error('Error submitting orders:', error);
    }
  };

  return (
    <div className="cart-container">
      <Link to="/menu" className="back-arrow">
        ← Back to Menu
      </Link>
      <div className="cart-info">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <p>{item.name}</p>
                  {item.type === "pizza" ? (
                    <>
                      <p>Pizza Size: {item.size.charAt(0).toUpperCase() + item.size.slice(1)}</p>
                      <p>Crust: {item.crustType.charAt(0).toUpperCase() + item.crustType.slice(1)}</p>
                      <p>Toppings: {Array.isArray(item.toppings) && item.toppings.length > 0 ? item.toppings.join(", ") : "None"}</p>
                    </>
                    ) : (
                      <p>Drink Size: {item.size}</p>
                    )}
                  <p>Price: ${item.price}</p>
                </div>
                <button className="remove-item-button" onClick={() => removeFromCart(item)}>
                  X
                </button>
              </div>
            ))}
            <h3>Total Price: ${getTotalPrice()}</h3>
          </div>
        )}
        <button className="submit-button" onClick={handleSubmit}>
          Submit Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
