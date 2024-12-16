import styles from './container.module.css'
import { ContainerProps } from './types'

const Container = (props: ContainerProps) => {
  return (
    <div className={styles.container} style={{ padding: props.padding}}>
      {props.children}
    </div>
  )
}

export { Container }
