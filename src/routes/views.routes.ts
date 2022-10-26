import { Router } from "express";
import { renderHome, renderSignup } from "../controllers/views.controller";

export const ViewRouter = Router();

ViewRouter.get("/", renderHome);

ViewRouter.get("/signup", renderSignup);
