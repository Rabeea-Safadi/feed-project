import { PrismaClient } from "@prisma/client";
import { join } from "path";
import { PORT } from "./utils/config";
import { ViewRouter } from "./routes/views.routes";
import express from "express";

export const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.$connect();
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(join(__dirname, "..", "public")));

  app.set("view engine", "ejs");
  app.set("views", join(__dirname, "views"));

  app.use("/", ViewRouter);

  app.listen(PORT);
}

main()
  .then(() => {
    prismaClient.$disconnect();
  })
  .catch((err) => {
    console.error(err);
    prismaClient.$disconnect();
  });
