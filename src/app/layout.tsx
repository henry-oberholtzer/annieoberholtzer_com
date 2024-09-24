import type { Metadata } from "next";
import { Vollkorn } from 'next/font/google'
import "./globals.css";

const vollkorn = Vollkorn({
  variable: "--vollkorn",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Annie Oberholtzer",
  description: "Actress & fight coordinator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vollkorn.className}`}>
        {children}
      </body>
    </html>
  );
}
