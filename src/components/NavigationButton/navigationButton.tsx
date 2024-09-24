import styles from './navigationbutton.module.css'

const NavigationButton = (obj: { props: NavigationButton }) => {
  const prop = obj.props

  return (
    <a href={prop.to}>
    <div className={styles.box}>
        {prop.name}
    </div>
    </a>
  )
}

export { NavigationButton }
