import type { Metadata } from "next";
import "./globals.css";
import { TheHeader } from "@/components/TheHeader";
import { Footer } from "@/components/TheFooter";

export const metadata: Metadata = {
  title: "Legendary 2APP",
  description: "Generated 2 app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">
        <TheHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
