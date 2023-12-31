import { Heading } from "@kuma-ui/core";
import { InputField } from "@/components/Form";
import { Button } from "@/components/Elements";

import { register } from "./actions";

const SignUp = () => {
  async function onSubmit(formData: FormData) {
    "use server";
    await register(formData);
  }

  return (
    <>
      <Heading as="h2" fontSize={40} mb={30}>
        アカウント作成
      </Heading>
      <form action={onSubmit}>
        <InputField type="text" name="username" label="お名前" width={300} />
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
          新規登録
        </Button>
      </form>
    </>
  );
};

export default SignUp;
