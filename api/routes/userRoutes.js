import express from "express";
import { test } from "../controlllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";
import { updateUser, deleteUser } from "../controlllers/userController.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);

export default router;
