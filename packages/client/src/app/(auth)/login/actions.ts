"use server";

import { cookies } from "next/headers";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const login = async (formData: FormData) => {
  try {
    const parsed = schema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(parsed),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { token } = await res.json();

    cookies().set("token", token);
  } catch (error) {
    console.log(error);
  }
};
