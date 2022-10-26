import { Router } from "express";
import { renderHome } from "../controllers/views.controller";

export const ViewRouter = Router();

ViewRouter.get("/", renderHome);
