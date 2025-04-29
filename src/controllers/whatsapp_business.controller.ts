// whatsapp business controller
import { Request, Response } from "express";
import { prisma } from "../../prisma";

// Get all whatsapp businesses
export const getWhatsappBusinesses = async (req: Request, res: Response) => {
  const whatsappBusinesses = await prisma.whatsappBusiness.findMany();
  res.json(whatsappBusinesses);
};

// Get a whatsapp business by id
export const getWhatsappBusinessById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const whatsappBusiness = await prisma.whatsappBusiness.findUnique({
    where: { id: Number(id) },
  });
  res.json(whatsappBusiness);
};

// Create a new whatsapp business
export const createWhatsappBusiness = async (req: Request, res: Response) => {
  const whatsappBusiness = await prisma.whatsappBusiness.create({
    data: req.body,
  });
  res.json(whatsappBusiness);
};

// Update a whatsapp business
export const updateWhatsappBusiness = async (req: Request, res: Response) => {
  const { id } = req.params;
  const whatsappBusiness = await prisma.whatsappBusiness.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json(whatsappBusiness);
};

// Delete a whatsapp business
export const deleteWhatsappBusiness = async (req: Request, res: Response) => {
  const { id } = req.params;
  const whatsappBusiness = await prisma.whatsappBusiness.delete({
    where: { id: Number(id) },
  });
  res.json(whatsappBusiness);
};
