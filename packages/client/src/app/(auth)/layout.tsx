import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <Box
      display={"flex"}
      justify={"center"}
      alignItems={"center"}
      flexDir={"column"}
      height={"calc(100vh - 80px)"}
    >
      {children}
    </Box>
  );
};

export default AuthLayout;
