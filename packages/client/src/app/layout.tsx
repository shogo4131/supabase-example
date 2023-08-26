import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import { Box } from "@kuma-ui/core";
import { Navbar } from "@/components/Elements";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sns monorepo sample",
  description: "sns monorepo sample",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <KumaRegistry>
          <Navbar />
          <Box as="main" height={"calc(100vh - 80px)"}>
            {children}
          </Box>
        </KumaRegistry>
      </body>
    </html>
  );
}
