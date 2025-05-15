import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intarch Studio",
  description: "Interior design Architecture Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/intarch-edit.png" />
      </head>
      <body
        className={`${inter.className} sans antialiased text-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
