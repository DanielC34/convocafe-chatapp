import express from "express";
import type { Request, Response } from "express";
import { signup, login, logout } from "../controllers/authControllers.ts";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/logout", logout);

export default router;
