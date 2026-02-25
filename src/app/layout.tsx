import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Johnny Huynh",
  description: "Fresh project",
  icons: {
    icon: "/images/wooden_blocks.png?v=1",
    shortcut: "/images/wooden_blocks.png?v=1",
    apple: "/images/wooden_blocks.png?v=1",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} font-[var(--font-sans)]`}>
        {children}
      </body>
    </html>
  );
}
