import styles from './navigationgroup.module.css'
import { NavigationButton } from '../NavigationButton'

const NavigationGroup = ({routes}: NavigationGroupProps) => {
  return (
    <nav className={styles.box} style={{ gridTemplateColumns: `repeat(${routes.length}, 1fr)` }}>
      {routes.map((button, i) => {
        return (
          <li key={i}>
            <NavigationButton key={i} props={button} />
          </li>
        )
      })}
    </nav>
  )
}

export { NavigationGroup }
