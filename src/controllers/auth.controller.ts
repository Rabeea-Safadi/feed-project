import { Request, Response } from "express";
import { hash, compare } from "bcrypt";
import User from "../models/user.model";

export function checkLogin(req: Request, res: Response) {
  console.log(req.body);
  res.send("login page");
}

export async function checkSignup(req: Request, res: Response) {
  const { username, email, password } = req.body;
  const hashedPassword = await hash(password, 10);

  try {
    const user = await User.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.render("home", { username, email, password });
  } catch (err) {
    res.send("error");
  }
}
