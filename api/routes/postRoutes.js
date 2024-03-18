import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create } from "../controlllers/postController.js";
import { getposts } from "../controlllers/postController.js";
import { deletePost } from "../controlllers/postController.js";
import { updatepost } from "../controlllers/postController.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

export default router;

// bongo cat
