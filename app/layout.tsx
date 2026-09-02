import type { Metadata } from "next";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";
import DeckChrome from "@/components/deck-chrome";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Git 101",
  description:
    "Internal dev-team deck reviewing Git concepts, workflows, hosting platforms, and everyday commands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${fraunces.variable} ${workSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <DeckChrome>{children}</DeckChrome>
      </body>
    </html>
  );
}
