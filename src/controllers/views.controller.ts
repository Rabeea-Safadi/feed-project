import { Request, Response } from "express";

export function renderHome(req: Request, res: Response) {
  res.render("home");
}

export function renderSignup(req: Request, res: Response) {
  res.render("signup");
}
