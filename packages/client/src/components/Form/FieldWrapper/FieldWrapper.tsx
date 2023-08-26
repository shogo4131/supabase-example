import { Box } from "@kuma-ui/core";

export type FiledWrapperProps = {
  label?: string;
  name?: string;
  children: React.ReactNode;
  className?: string;
};

export const FiledWrapper = ({
  children,
  label,
  name,
  className,
}: FiledWrapperProps) => {
  return (
    <Box as="label" htmlFor={name} fontSize={12} className={className}>
      {label}
      <Box>{children}</Box>
    </Box>
  );
};
