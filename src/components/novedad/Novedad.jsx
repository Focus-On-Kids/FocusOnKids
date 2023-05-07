import { Button } from '../button/Button';
import styles from './novedad.module.css';

export function Novedad ({ novedad }) {
  return (
    <article className={styles.novedad}>
      <aside className={styles.novedad__aside__item}>
        <img src={novedad.img} alt={novedad.subtitle} />
        <div className={styles.novedad__div__content}>
          <span>{novedad.title}</span>
          <h5>{novedad.subtitle}</h5>
          <span>{novedad.description}</span>
        </div>
      </aside>
      <Button text="Ver más" />
    </article >
  );
}
