import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create } from "../controlllers/postController.js";
import { getposts } from "../controlllers/postController.js";
import { deletePost } from "../controlllers/postController.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);

export default router;
