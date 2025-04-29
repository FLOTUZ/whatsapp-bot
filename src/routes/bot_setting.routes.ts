import { Router } from "express";
import {
  getBotSettings,
  getBotSettingById,
  createBotSetting,
  updateBotSetting,
  deleteBotSetting,
} from "../controllers";

const router = Router();

// Get all bot settings
router.get("/", getBotSettings);

// Get a bot setting by id
router.get("/:id", getBotSettingById);

// Create a new bot setting
router.post("/", createBotSetting);

// Update a bot setting
router.put("/:id", updateBotSetting);

// Delete a bot setting
router.delete("/:id", deleteBotSetting);

export default router;
