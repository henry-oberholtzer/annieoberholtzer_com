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
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='90' font-size='90'>⚔️</text></svg>"
      />
      <body className={`${vollkorn.className}`}>
        {children}
      </body>
    </html>
  );
}
