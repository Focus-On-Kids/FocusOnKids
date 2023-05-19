import styles from './title.module.css';

export function Title({ children }) {
  return (
    <div className={styles.title}>
      <h1 className={styles.title__h1}>{children}</h1>
    </div>
  );
}
