import { Button as KumaButton, ButtonProps } from "@kuma-ui/core";
import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return (
    <KumaButton
      {...props}
      p={" 8px 16px "}
      bgColor={"blue"}
      borderRadius={8}
      color={"white"}
      border={"none"}
      _hover={{ opacity: 0.6 }}
    >
      {children}
    </KumaButton>
  );
};
