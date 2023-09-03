import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../libs/prisma";
import jwt from "jsonwebtoken";

export const register = async (
  req: Request<
    never,
    never,
    { username: string; email: string; password: string }
  >,
  res: Response
) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    return res.json({ user });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (
  req: Request<never, never, { email: string; password: string }>,
  res: Response
) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "", {
      expiresIn: "1d",
    });

    return res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
