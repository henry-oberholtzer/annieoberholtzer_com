import { PropsWithChildren } from "react"
import styles from './header.module.css'

const Header = (props: PropsWithChildren) => {
  return (
    <header className={styles.header}>
      {props.children}
    </header>
  )
}

export { Header }
