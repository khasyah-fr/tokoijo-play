import express from "express";

import { getVideos, getVideoById } from "../controllers/videoController.js";
import { getProductsByVideoId } from "../controllers/productController.js";
import { getUsers } from "../controllers/userController.js";

const nonAuthRouter = new express.Router();

nonAuthRouter.get("/api/videos", getVideos);
nonAuthRouter.get("/api/videos/:id", getVideoById);

nonAuthRouter.get("/api/videos/:id/products", getProductsByVideoId);

nonAuthRouter.get("/api/users", getUsers);

export default nonAuthRouter;
