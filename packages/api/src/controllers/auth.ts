import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../libs/prisma";

export const register = async (
  req: Request<
    never,
    never,
    { usename: string; email: string; password: string }
  >,
  res: Response
) => {
  const { usename, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        usename,
        email,
        password: hashPassword,
      },
    });

    return res.json({ user });
  } catch (error) {
    console.log(error);
  }
};
