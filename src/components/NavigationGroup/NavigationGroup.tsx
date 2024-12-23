import { PropsWithChildren } from "react"
import styles from './navigationgroup.module.css'


const NavigationGroup = (props: PropsWithChildren) => {
  return (
    <nav className={styles.box}>
      {props.children}
    </nav>
  )
}

export { NavigationGroup }
