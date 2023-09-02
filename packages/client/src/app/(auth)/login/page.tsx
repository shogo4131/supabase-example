import { Heading, Box } from "@kuma-ui/core";
import { InputField } from "@/components/Form";
import { Button } from "@/components/Elements";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

const Login = () => {
  async function onSubmit(formData: FormData) {
    "use server";
    const parsed = schema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    const res = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(parsed),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token } = await res.json();

    cookies().set("token", token);
    redirect("/");
  }

  return (
    <Box
      display={"flex"}
      justify={"center"}
      alignItems={"center"}
      flexDir={"column"}
      height={"calc(100vh - 80px)"}
    >
      <Heading as="h2" fontSize={40} mb={30}>
        ログイン
      </Heading>
      <form action={onSubmit}>
        <InputField
          type="email"
          name="email"
          label="メールアドレス"
          width={300}
        />
        <InputField
          type="password"
          name="password"
          label="パスワード"
          width={300}
        />
        <Button type="submit" width={300} mt={40}>
          ログイン
        </Button>
      </form>
    </Box>
  );
};

export default Login;
