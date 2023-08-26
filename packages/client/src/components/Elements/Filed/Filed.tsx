import { Input } from "@kuma-ui/core";
import type { ComponentProps } from "react";

type Props = ComponentProps<"input">;

export const Filed = ({ ...props }: Props) => {
  return (
    <Input
      {...props}
      height={35}
      border={"1px solid #cccccc"}
      borderRadius={8}
      p={16}
    />
  );
};
