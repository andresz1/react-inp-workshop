import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Container } from "@/components/ui/container";

const inter = Inter({ subsets: ["latin"] });

const siteURL = process.env.SITE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    template: "%s | React INP Workshop",
    default: "React INP Workshop",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container className="my-4" asChild>
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
