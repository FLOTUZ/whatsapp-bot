import { Router } from "express";
import {
  getBots,
  getBotById,
  createBot,
  updateBot,
  deleteBot,
} from "controllers";

const router = Router();

// Get all bots
router.get("/", getBots);

// Get a bot by id
router.get("/:id", getBotById);

// Create a new bot
router.post("/", createBot);

// Update a bot
router.put("/:id", updateBot);

// Delete a bot
router.delete("/:id", deleteBot);

export default router;
