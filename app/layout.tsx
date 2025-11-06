import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { satoshi } from "@/lib/fonts";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Tech@NYU",
  description: "The place for hackers, builders, and designers to create @ NYU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${satoshi.variable} w-[100svw] overflow-x-clip antialiased bg-[#000000] dark:bg-[#000000] scheme-only-dark`}
      >
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
