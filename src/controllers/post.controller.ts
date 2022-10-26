import { Request, Response } from "express";
import Post from "../models/post.model";

export async function createPost(req: Request, res: Response) {
  const { author, body } = req.body;

  try {
    const post = await Post.create({
      data: {
        author,
        body,
      },
    });

    const posts = await Post.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.render("feed", {
      username: author,
      feedItems: posts,
    });
  } catch (err) {
    res.render("error", {
      message: "Something went wrong in the server",
    });
  }
}
