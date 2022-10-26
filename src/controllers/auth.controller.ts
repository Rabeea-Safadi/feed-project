import { Request, Response } from "express";
import { hash, compare } from "bcrypt";
import User from "../models/user.model";

export async function checkLogin(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await User.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      res.send("user not found");
      return;
    }

    if (!(await compare(password, user.password))) {
      res.send("wrong password");
      return;
    }

    res.send(`${user.username} logged in -> take me to feed page`);
  } catch (err) {
    res.send("error");
  }
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
