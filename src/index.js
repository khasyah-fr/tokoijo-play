import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import seeder from "./database/seeder.js";

import router from "./routes/routes.js";

dotenv.config();
const port = process.env.PORT; //|| 3000
const db = process.env.MONGODB_URL; // || "mongodb://localhost:27017/tokoijo-play"

mongoose.set("debug", true);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
    seeder();
  })
  .catch((e) => console.log(e));

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
