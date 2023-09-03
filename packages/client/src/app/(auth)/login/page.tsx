import { Heading, Box } from "@kuma-ui/core";
import { InputField } from "@/components/Form";
import { Button } from "@/components/Elements";
import { login } from "./actions";
import { redirect } from "next/navigation";

const Login = () => {
  async function onSubmit(formData: FormData) {
    "use server";
    await login(formData);
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
