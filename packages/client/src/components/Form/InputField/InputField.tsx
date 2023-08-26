import { Input } from "@kuma-ui/core";
import type { ComponentProps } from "react";
import { FiledWrapper, type FiledWrapperProps } from "../FieldWrapper";

type Props = ComponentProps<"input"> & Omit<FiledWrapperProps, "children">;

export const InputField = ({ label, className, ...props }: Props) => {
  return (
    <FiledWrapper label={label}>
      <Input
        {...props}
        height={35}
        border={"1px solid #cccccc"}
        borderRadius={8}
        p={16}
      />
    </FiledWrapper>
  );
};
