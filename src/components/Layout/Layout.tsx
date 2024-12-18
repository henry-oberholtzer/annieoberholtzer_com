import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/footer";
import { LayoutProps } from "./types";
import { vollkorn } from "@/app/fonts";

export default function Layout({ children}: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
