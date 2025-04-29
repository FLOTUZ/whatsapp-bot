// controller for bot
import { prisma } from "../../prisma";
import { Request, Response } from "express";

export const getBots = async (req: Request, res: Response) => {
  const bots = await prisma.bot.findMany();
  res.json(bots);
};

export const getBotById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bot = await prisma.bot.findUnique({ where: { id: String(id) } });
  res.json(bot);
};

export const createBot = async (req: Request, res: Response) => {
  const bot = await prisma.bot.create({ data: req.body });
  res.json(bot);
};

export const updateBot = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bot = await prisma.bot.update({
    where: { id: String(id) },
    data: req.body,
  });
  res.json(bot);
};

export const deleteBot = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bot = await prisma.bot.delete({ where: { id: String(id) } });
  res.json(bot);
};
