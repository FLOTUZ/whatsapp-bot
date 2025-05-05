import { Request, Response } from "express";
import { prisma } from "../../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError, BadRequestError } from "../errors";

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

// Login function
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Register function
export const register = async (req: Request, res: Response) => {
  const { name, email, password, confirm_password } = req.body;

  try {
    const alreadyExists = await prisma.user.findUnique({
      where: { email, name },
    });

    if (alreadyExists) {
      throw new BadRequestError("El usuario ya existe");
    }

    if (password !== confirm_password) {
      throw new BadRequestError("Las contraseñas no coinciden");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.status).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
