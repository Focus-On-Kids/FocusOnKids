import { Button } from '../button/Button';
import styles from './ctacontact.module.css';

export function CTAContact() {
  return (
    <article className={styles.cta__article__contact}>
      <h3>Para más información podes</h3>
      <Button>Contactarnos</Button>
    </article>
  );
}
