import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment } from "../controlllers/commentController.js";
import { getPostComments } from "../controlllers/commentController.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);

export default router;
