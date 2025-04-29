import { Router } from "express";
import {
  getWhatsappBusinesses,
  getWhatsappBusinessById,
  createWhatsappBusiness,
  updateWhatsappBusiness,
  deleteWhatsappBusiness,
} from "controllers";

const whatsappBusinessRouter = Router();

// Get all whatsapp businesses
whatsappBusinessRouter.get("/", getWhatsappBusinesses);

// Get a whatsapp business by id
whatsappBusinessRouter.get("/:id", getWhatsappBusinessById);

// Create a new whatsapp business
whatsappBusinessRouter.post("/", createWhatsappBusiness);

// Update a whatsapp business
whatsappBusinessRouter.put("/:id", updateWhatsappBusiness);

// Delete a whatsapp business
whatsappBusinessRouter.delete("/:id", deleteWhatsappBusiness);

export default whatsappBusinessRouter;
