import express from "express";
import { test } from "../controlllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";
import { updateUser } from "../controlllers/userController.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);

export default router;
