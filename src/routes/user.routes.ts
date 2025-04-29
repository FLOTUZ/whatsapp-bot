import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "controllers";

const userRouter = Router();

// Get all users
userRouter.get("/", getAllUsers);

// Get a user by id
userRouter.get("/:id", getUserById);

// Create a new user
userRouter.post("/", createUser);

// Update a user
userRouter.put("/:id", updateUser);

// Delete a user
userRouter.delete("/:id", deleteUser);

export default userRouter;
