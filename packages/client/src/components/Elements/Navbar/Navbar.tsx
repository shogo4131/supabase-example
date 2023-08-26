import { HStack, Heading, Box } from "@kuma-ui/core";
import Link from "next/link";

export const Navbar = () => {
  return (
    <HStack
      justify={"space-between"}
      alignItems={"center"}
      bgColor={"blueviolet"}
      color="white"
      height={80}
      p={16}
    >
      <Heading as="h1" fontSize={24}>
        <Link href={"/"}>sample app</Link>
      </Heading>
      <Box as="nav">
        <HStack as="ul" listStyle={"none"} gap={12}>
          <Box as="li">
            <Link href={"/login"}>Login</Link>
          </Box>
          <Box as="li">
            <Link href={"/signup"}>SignUp</Link>
          </Box>
        </HStack>
      </Box>
    </HStack>
  );
};
