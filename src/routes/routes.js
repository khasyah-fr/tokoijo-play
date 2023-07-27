import express from "express";
import { register } from "prom-client";

import {
  getVideos,
  getVideoById,
  getVideosByTitle,
} from "../controllers/videoController.js";
import {
  getProductsByVideoId,
  getProductsByTitle,
} from "../controllers/productController.js";
import {
  getUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import {
  getCommentsByVideoId,
  createComment,
} from "../controllers/commentController.js";

const router = new express.Router();

router.get("/api/videos", getVideos);
router.get("/api/videos/:id", getVideoById);

router.get("/api/videos/:id/products", getProductsByVideoId);

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);
router.put("/api/users/:id", updateUser);

router.get("/api/videos/:id/comments", getCommentsByVideoId);
router.post("/api/videos/:id/comments", createComment);

router.post("/api/videos/search", getVideosByTitle);
router.post("/api/products/search", getProductsByTitle);

router.get("/api/metrics", async (req, res) => {
  try {
    const metrics = await register.metrics();
    res.set("Content-Type", register.contentType);
    res.end(metrics);
  } catch (error) {
    res.status(500).send("Error generating metrics");
  }
});

export default router;
