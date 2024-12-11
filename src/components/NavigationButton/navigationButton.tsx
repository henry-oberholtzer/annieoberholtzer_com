import styles from './navigationbutton.module.css'

const NavigationButton = (obj: { props: NavigationButton }) => {
  const prop = obj.props;

  return (
    <a href={prop.to}>
    <div className={styles.box}>
      <p className={styles.boxInner}>
        {prop.name}
      </p>
    </div>
    </a>
  );
}

export { NavigationButton };
