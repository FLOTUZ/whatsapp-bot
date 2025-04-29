// user controller
import { Request, Response } from "express";
import { prisma } from "../../prisma";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: String(id) } });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.update({
    where: { id: String(id) },
    data: req.body,
  });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({ where: { id: String(id) } });
  res.json(user);
};
