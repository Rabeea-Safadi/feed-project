import { Request, Response } from "express";

export async function renderHome(req: Request, res: Response) {
  res.render("home");
}