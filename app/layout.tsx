import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { satoshi } from "@/lib/fonts";

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
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased bg-black`}
      >
          <Navbar />
          {children}
        
      </body>
    </html>
  );
}
