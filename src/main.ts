import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.$connect();
  console.log("connected");
}

main()
  .then(() => {
    prismaClient.$disconnect();
  })
  .catch((err) => {
    console.error(err);
    prismaClient.$disconnect();
  });
