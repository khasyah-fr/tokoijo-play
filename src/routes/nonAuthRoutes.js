import express from "express";

import { getVideos, getVideoById } from "../controllers/videoController.js";

const nonAuthRouter = new express.Router();

nonAuthRouter.get("/api/videos", getVideos);
nonAuthRouter.get("/api/videos/:id", getVideoById);

export default nonAuthRouter;
