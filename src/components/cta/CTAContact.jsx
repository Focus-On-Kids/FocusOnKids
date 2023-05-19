import { Button } from '../button/Button';
import styles from './ctacontact.module.css';

export function CTAContact({ alwaysActive = false }) {
  return (
    <article className={alwaysActive ? styles.cta__article__contact : `${styles.cta__article__contact} ${styles.no__active}`}>
      <h3>Para más información podes</h3>
      <Button href="/">Contactarnos</Button>
    </article>
  );
}
