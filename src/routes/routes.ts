import { Router } from "express";
import messageRoutes from "./message.routes";
import userRoutes from "./user.routes";
import botRoutes from "./bot.routes";
import botSettingRoutes from "./bot_setting.routes";
import whatsappBusinessRoutes from "./whatsapp_business.routes";

const router = Router();

// Route to verify the webhook
router.use("/message", messageRoutes);
// group of routes for user
router.use("/user", userRoutes);

// group of routes for bot
router.use("/bot", botRoutes);

// group of routes for bot_setting
router.use("/bot_setting", botSettingRoutes);

// group of routes for whatsapp_business
router.use("/whatsapp_business", whatsappBusinessRoutes);

export default router;
