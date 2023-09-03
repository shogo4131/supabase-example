import { z } from "zod";

const schema = z.object({
  content: z.string().min(1),
});

export const post = async (formData: FormData) => {
  try {
    const parsed = schema.parse({
      content: formData.get("content"),
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/post`,
      {
        method: "POST",
        body: JSON.stringify(parsed),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const post = await res.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};
