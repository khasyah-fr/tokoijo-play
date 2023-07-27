import express from "express";

import { getVideos, getVideoById } from "../controllers/videoController.js";
import { getProductsByVideoId } from "../controllers/productController.js";

const nonAuthRouter = new express.Router();

nonAuthRouter.get("/api/videos", getVideos);
nonAuthRouter.get("/api/videos/:id", getVideoById);

nonAuthRouter.get("/api/videos/:id/products", getProductsByVideoId);

export default nonAuthRouter;
