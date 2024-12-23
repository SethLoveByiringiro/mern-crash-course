import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";  // Note the .js extension
import productRoutes from "./routes/product.route.js";

dotenv.config(); // Load environment variables from.env file

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);


 

app.listen(5000, () => {
    connectDB();  // Connect to MongoDB database
    console.log("Server started on http://localhost:5000 ");
});

