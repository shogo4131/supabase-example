import { Button, InputField } from "@/components";
import { HStack } from "@kuma-ui/core";
import { post } from "./actions";

const Dashboard = () => {
  async function onSubmit(formData: FormData) {
    "use server";
    await post(formData);
  }

  return (
    <form action={onSubmit}>
      <HStack mt={20} gap={8}>
        <InputField type="text" name="content" width={600} />
        <Button type="submit">送信</Button>
      </HStack>
    </form>
  );
};

export default Dashboard;
