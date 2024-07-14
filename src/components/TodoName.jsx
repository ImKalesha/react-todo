import styles from './Header.module.css'

let TodoName = () => {
  const HeaderName = 'Todo App';
  return (
    <>
      <span className={styles.header}>{HeaderName}</span>
    </>
  )
}

export default TodoName;