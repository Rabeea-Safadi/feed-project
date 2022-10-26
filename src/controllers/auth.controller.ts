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
      res.render("error", { message: "User not found" });
      return;
    }

    if (!(await compare(password, user.password))) {
      res.render("error", { message: "Invalid password" });
      return;
    }

    res.render("feed", {
      username: user.username,
      feedItems: [
        { author: "rabeeasaf", body: "some dumbass shit" },
        { author: "rabeeasaf", body: "some other dumbass shit" },
        { author: "rabeeasaf", body: "some other other dumbass shit" },
      ],
    });
  } catch (err) {
    res.render("error", { message: "Something went wrong in the server" });
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
    res.render("error", { message: "Something went wrong in the server" });
  }
}
