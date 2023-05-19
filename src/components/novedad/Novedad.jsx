import { Button } from '../button/Button';
import styles from './novedad.module.css';

export function Novedad ({ novedad }) {
  return (
    <article className={styles.novedad}>
      <figure className={styles.novedad__aside__item}>
        <img src={novedad.img} alt={novedad.subtitle} />
      </figure>
      <Button href="/">Ver más</Button>
    </article >
  );
}
