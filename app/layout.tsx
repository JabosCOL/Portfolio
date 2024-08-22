import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Bolivar \u269B",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <Navbar />
        <Transition />
        {children}
      </body>
    </html>
  );
}
