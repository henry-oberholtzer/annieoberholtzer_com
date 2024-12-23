import styles from './navigationbutton.module.css'
import Link from 'next/link';

const NavigationButton = (obj: { props: NavigationButton }) => {
  const prop = obj.props;

  return (
    <Link href={prop.to} className={styles.box}>
      <p className={styles.boxInner}>
        {prop.name}
      </p>
    </Link>
  );
}

export { NavigationButton };
