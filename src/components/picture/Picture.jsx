import { Play } from '../play/Play';
import styles from './picture.module.css';

export function Picture({ src, alt, isModal = false }) {
  return (
    <figure className={styles.picture}>
      <img className={styles.picture__img} src={src} alt={alt} />
      {isModal && <Play />}
    </figure>
  );
}
