import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from 'express'
import authRoutes from "./routes/authRoutes.ts";
import connectDB from "./db/db.ts";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
