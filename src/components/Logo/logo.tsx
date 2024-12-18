import styles from './logo.module.css'

const Logo = () => {
  return (
    <a className={styles.box} href="/">
      <h1 className={styles.heading}><span className={styles.capital}>A</span>nnie&nbsp;<span className={styles.capital}>O</span>berholtzer</h1>
      <div className={styles.underline}/>
      <p className={styles.subheading}><span>Actor</span><span>⚔️</span><span>Fighter</span></p>
    </a>
  )
}

export { Logo }
