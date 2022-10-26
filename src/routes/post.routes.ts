import { Router } from "express";
import { createPost } from "../controllers/post.controller";

export const PostRouter = Router();

PostRouter.post("/create", createPost);
