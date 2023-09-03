import { z } from "zod";

const schema = z.object({
  usename: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const register = async (formData: FormData) => {
  try {
    const parsed = schema.parse({
      usename: formData.get("usename"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
      {
        method: "POST",
        body: JSON.stringify(parsed),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const user = await res.json();

    return user;
  } catch (error) {
    console.log(error);
  }
};
