import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Mongo is connected");
});

const app = express();

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
