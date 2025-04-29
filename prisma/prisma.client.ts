// global prisma client
import { PrismaClient } from "@prisma/client";
import { error } from "console";

export const prisma = new PrismaClient({
  log: ["query"],
});

export default prisma;
