import { Router } from "express";
import { verifyWebhook, handleIncomingMessage } from "../controllers";

export const router = Router();
// Ruta para verificar el webhook de WhatsApp
router.get("/", verifyWebhook);

// Ruta para recibir los mensajes de WhatsApp
router.post("/", handleIncomingMessage);

// group of routes for user
router.use("/user", require("./user.routes"));

// group of routes for bot
router.use("/bot", require("./bot.routes"));

// group of routes for bot_setting
router.use("/bot_setting", require("./bot_setting.routes"));

// group of routes for whatsapp_business
router.use("/whatsapp_business", require("./whatsapp_business.routes"));
