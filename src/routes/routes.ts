import { Router } from "express";
import { verifyWebhook, handleIncomingMessage } from "../controllers";

export const router = Router();
// Ruta para verificar el webhook de WhatsApp
router.get("/", verifyWebhook);

// Ruta para recibir los mensajes de WhatsApp
router.post("/", handleIncomingMessage);
