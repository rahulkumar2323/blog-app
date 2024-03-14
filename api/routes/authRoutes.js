import express from "express";
import { signup } from "../controlllers/authController.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
