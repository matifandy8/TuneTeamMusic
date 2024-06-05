import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuneTeam",
  description: "Create and share your link to tune your music",
  openGraph: {
    title: "TuneTeam",
    description: "Create and share your link to tune your music",
  },
  twitter: {
    title: "TuneTeam",
    description: "Create and share your link to tune your music",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
