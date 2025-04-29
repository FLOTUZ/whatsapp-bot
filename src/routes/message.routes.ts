import { Router } from "express";
import { verifyWebhook, handleIncomingMessage } from "controllers";

const webhookRouter = Router();

// Route to verify the webhook
webhookRouter.get("/verify-webhook", verifyWebhook);

// Route to handle incoming messages
webhookRouter.post("/incoming-message", handleIncomingMessage);

export default webhookRouter;
