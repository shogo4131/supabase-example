import type { Request, Response } from "express";

import { prisma } from "../libs/prisma";

export const post = async (
  req: Request<never, never, { content: string }>,
  res: Response
) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const newPost = await prisma.post.create({
      data: { content, authorId: 1 },
    });

    res.status(201).json({ post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
