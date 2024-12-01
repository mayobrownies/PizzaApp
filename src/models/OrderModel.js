import mongoose from "mongoose";

// pizzas and drinks use the same schema
const itemSchema = new mongoose.Schema({
  type:{
    type: String,
    enum: ['drink', 'pizza'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  toppings: {
    type: [String],
    required: function() {
      return this.type === "pizza";
    },
  },
  crustType: {
    type: String,
    required: function() {
      return this.type === "pizza";
    },
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  order: {
    type: [itemSchema],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
    timestamps: true,
    collection: "PizzaOrders",
  });

const Order = mongoose.model('Order', orderSchema);
export default Order;