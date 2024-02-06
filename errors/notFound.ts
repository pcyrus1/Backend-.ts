import { Request, Response } from "express";

export const notFound = async (req: Request, res: Response) => {
  return res.status(404).json({ success: false, message: "Route does not exist" });
};
