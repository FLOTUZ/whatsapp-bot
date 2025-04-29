import { Router } from "express";
import messageRoutes from "./whatsapp-business.routes";
import userRoutes from "./user.routes";
import botRoutes from "./bot.routes";
import botSettingRoutes from "./bot_setting.routes";
import whatsappBusinessRoutes from "./whatsapp-business.routes";

const router = Router();

// setup default path
router.get("/", (req, res) => {
  res.send("Hello from the default path");
});

// Route to verify the webhook
router.use("/whatsapp-business", messageRoutes);

// group of routes for user
router.use("/user", userRoutes);

// group of routes for bot
router.use("/bot", botRoutes);

// group of routes for bot_setting
router.use("/bot_setting", botSettingRoutes);

// group of routes for whatsapp_business
router.use("/whatsapp_business", whatsappBusinessRoutes);

export default router;
