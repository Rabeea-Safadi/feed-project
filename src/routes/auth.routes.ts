import { Router } from "express";
import { checkLogin, checkSignup } from "../controllers/auth.controller";

export const AuthRouter = Router();

AuthRouter.post("/login", checkLogin);
AuthRouter.post("/signup", checkSignup);
