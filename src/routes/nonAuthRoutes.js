import express from "express";

import {
  getVideos,
  getVideoById,
  getVideosByTitle,
} from "../controllers/videoController.js";
import {
  getProductsByVideoId,
  getProductsByTitle,
} from "../controllers/productController.js";
import { getUsers } from "../controllers/userController.js";
import {
  getCommentsByVideoId,
  createComment,
} from "../controllers/commentController.js";

const nonAuthRouter = new express.Router();

nonAuthRouter.get("/api/videos", getVideos);
nonAuthRouter.get("/api/videos/:id", getVideoById);

nonAuthRouter.get("/api/videos/:id/products", getProductsByVideoId);

nonAuthRouter.get("/api/users", getUsers);

nonAuthRouter.get("/api/videos/:id/comments", getCommentsByVideoId);
nonAuthRouter.post("/api/videos/:id/comments", createComment);

nonAuthRouter.post("/api/videos/search", getVideosByTitle);
nonAuthRouter.post("/api/products/search", getProductsByTitle);

export default nonAuthRouter;
