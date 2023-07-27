import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import seeder from "./database/seeder.js";

import nonAuthRouter from "./routes/nonAuthRoutes.js";

dotenv.config();
const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URL || "mongodb://localhost:27017/tokoijo-play";

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
await seeder();

const app = express();

app.use(express.json());

app.use(nonAuthRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
