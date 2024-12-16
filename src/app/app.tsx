import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Layout from "@/components/Layout/Layout";

const vollkorn = localFont({
  variable: "--vollkorn",
  src: [
    {
      path: './fonts/Vollkorn/Vollkorn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Vollkorn/Vollkorn-Bold.woff2',
      weight: "bold",
      style: 'normal',
    }
  ]
})

const routes: NavigationButton[] = [
  {
    name: "About",
    to: "",
  },
  {
    name: "Media",
    to: "",
  },
  {
    name: "Contact",
    to: "",
  }
]

export const metadata: Metadata = {
  title: "Annie Oberholtzer",
  description: "Actress & fight coordinator",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <Layout routes={routes}>

    </Layout>
  );
}
