import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/footer";
import styles from './layout.module.css'
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Annie Oberholtzer",
  description: "Actress & fight coordinator",
};

export default function Layout({ children}: PropsWithChildren) {
  return (
    <div className={styles.parent}>
      <NavBar />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
