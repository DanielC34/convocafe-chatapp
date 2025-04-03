import type { Request, Response } from "express";

export const signup = async (req: Request, res: Response): Promise<void> => {
  res.send("Sign up page");
};

export const login = async (req: Request, res: Response): Promise<void> => {
  res.send("Login page");
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.send("Log out page");
};
