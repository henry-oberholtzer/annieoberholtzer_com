import styles from './logo.module.css'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link className={styles.box} href="/">
      <h1 className={styles.heading}><span className={styles.capital}>A</span>nnie&nbsp;<span className={styles.capital}>O</span>berholtzer</h1>
      <div className={styles.underline}/>
      <p className={styles.subheading}><span>Actor</span><span className={styles.sword}>⚔️</span><span>Fighter</span></p>
    </Link>
  )
}

export { Logo }
