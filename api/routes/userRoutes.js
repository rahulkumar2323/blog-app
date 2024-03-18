import express from "express";
import { test } from "../controlllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";
import {
  updateUser,
  deleteUser,
  signout,
  getUsers,
} from "../controlllers/userController.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);

export default router;
