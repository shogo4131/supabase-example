import { Heading, Box } from "@kuma-ui/core";
import { InputField } from "@/components/Form";
import { Button } from "@/components/Elements";

const SignUp = () => {
  return (
    <Box
      display={"flex"}
      justify={"center"}
      alignItems={"center"}
      flexDir={"column"}
      height={"calc(100vh - 80px)"}
    >
      <Heading as="h2" fontSize={40} mb={30}>
        アカウント作成
      </Heading>
      <form action="">
        <InputField label="お名前" width={300} />
        <InputField type="email" label="メールアドレス" width={300} />
        <InputField type="password" label="パスワード" width={300} />
        <Button type="submit" width={300} mt={40}>
          新規登録
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
