import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo List",
  description: "The solutions to your problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
