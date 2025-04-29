// bot_setting controller
import { Request, Response } from "express";
import { prisma } from "../../prisma";

// Get all bot settings
export const getBotSettings = async (req: Request, res: Response) => {
  const botSettings = await prisma.botSetting.findMany();
  res.json(botSettings);
};

// Get a bot setting by id
export const getBotSettingById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const botSetting = await prisma.botSetting.findUnique({
    where: { id: String(id) },
  });
  res.json(botSetting);
};

// Create a new bot setting
export const createBotSetting = async (req: Request, res: Response) => {
  const botSetting = await prisma.botSetting.create({ data: req.body });
  res.json(botSetting);
};

// Update a bot setting
export const updateBotSetting = async (req: Request, res: Response) => {
  const { id } = req.params;
  const botSetting = await prisma.botSetting.update({
    where: { id: String(id) },
    data: req.body,
  });
  res.json(botSetting);
};

// Delete a bot setting
export const deleteBotSetting = async (req: Request, res: Response) => {
  const { id } = req.params;
  const botSetting = await prisma.botSetting.delete({
    where: { id: String(id) },
  });
  res.json(botSetting);
};
