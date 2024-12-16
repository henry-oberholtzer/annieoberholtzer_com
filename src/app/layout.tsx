import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const vollkorn = localFont({
  variable: "--vollkorn",
  src: [
    {
      path: './fonts/Vollkorn/Vollkorn-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
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
