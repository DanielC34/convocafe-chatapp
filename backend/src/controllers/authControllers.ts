import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { fullName, email, password } = req.body;
  try {
    // Hash the password
     const hashedPassword = await bcrypt.hash(password, 10);
   } catch (error) { }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  res.send("Login page");
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.send("Log out page");
};
