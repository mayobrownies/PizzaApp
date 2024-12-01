<<<<<<< Updated upstream
import express from 'express'
import cors from 'cors'

const PORT = 8000

const app = express()
app.use(express.json())
app.use(cors())


app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))
=======
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Order from "./models/OrderModel.js"

dotenv.config();

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

const DB = process.env.MONGO_CONNECTION;

async function main(){
  try {
    await mongoose.connect(DB);
    console.log("MongoDB successfully connected!");

    app.post('/api/orders', async (req, res) => {
      try {
        console.log("Received order data:", req.body);

        const newOrder = new Order({
          order: req.body.orders, 
        });

        const savedOrder = await newOrder.save();
        console.log("Order saved successfully:", savedOrder);

        res.status(201).json({ message: "Order submitted successfully", order: savedOrder });
      } catch (err) {
        console.error("Error saving order:", err);
        res.status(500).json({ error: "Failed to submit order" });
      }
    });

    app.use('/', (req, res) => {
      res.send("Server is running");
    });

    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

main();
>>>>>>> Stashed changes
