// 1.STEP

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import useRouter from "./routers/user.router.js";
import connectDb from "./utils/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//  routing
app.use("/api/v1/user", useRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`server is running on http://localhost:${PORT} `);
});
