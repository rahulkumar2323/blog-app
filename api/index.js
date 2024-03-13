import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Mongo is connected");
});

const app = express();

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
