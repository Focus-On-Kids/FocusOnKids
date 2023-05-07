import styles from './button.module.css';

export function Button ({ text }) {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
}
