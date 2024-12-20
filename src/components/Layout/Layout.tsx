import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/footer";
import styles from './layout.module.css'
import { PropsWithChildren } from "react";

export default function Layout({ children}: PropsWithChildren) {
  return (
    <div className={styles.parent}>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
