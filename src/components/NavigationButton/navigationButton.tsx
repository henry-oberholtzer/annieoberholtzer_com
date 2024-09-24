import styles from './navigationbutton.module.css'

const NavigationButton = (obj: { props: NavigationButton }) => {
  const prop = obj.props

  return (
    <a className={styles.box} href={prop.to}>
      {prop.name}
    </a>
  )
}

export { NavigationButton }
