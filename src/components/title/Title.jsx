import styles from './title.module.css';
import icons from '../../assets/icons/index';

export function Title({ children, flags = false }) {
  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.title__h1}>{children}</h1>
      </div>
      {flags && (
        <div className={styles.flag}>
          <img src={icons.es_flag} alt="Spanish language" />
          <img src={icons.it_flag} alt="Italian language" />
          {flags}
        </div>
      )}
    </>
  );
}
