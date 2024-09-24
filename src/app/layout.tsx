import type { Metadata } from "next";
import { Geologica } from 'next/font/google'
import "./globals.css";

const geologica = Geologica({
  weight: ["300", "400", "500"],
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
      <body className={`${geologica.className}`}>
        {children}
      </body>
    </html>
  );
}
