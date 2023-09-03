import { Box } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <Box display={"flex"} justify={"center"} height={"calc(100vh - 80px)"}>
      {children}
    </Box>
  );
};

export default DashboardLayout;
